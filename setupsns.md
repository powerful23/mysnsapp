### how to setup sns

1. run ```create-react-native-app ${myapp}```

2. run ```npm run eject```

3. install aws-amplify-react-native

4. run ```react-native link aws-amplify-react-native```

5. open ```android/build.gradle```:

Add ```classpath 'com.google.gms:google-services:3.1.1'``` in the ```dependencies``` under ```buildscript```:
```gradle
dependencies {
        classpath 'com.android.tools.build:gradle:2.2.3'
        classpath 'com.google.gms:google-services:3.1.1'
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
```

Add the following code  into ```repositories``` under ```allprojects```
```gradle
maven {
        url 'https://maven.google.com'
    }
```

6. open ```android/app/build.gradle```:

Add ```apply plugin: 'com.google.gms.google-services'``` at the bottom of the file.

7. open ```android/app/src/main/AndroidManifest.xml```:

add into ```application```
```xml
    <application ...>
    <!-- Add the following>
        <!-- [START firebase_service] -->
        <service
            android:name="com.amazonaws.amplify.pushnotification.MyFirebaseMessagingService">
            <intent-filter>
                <action android:name="com.google.firebase.MESSAGING_EVENT"/>
            </intent-filter>
        </service>
        <!-- [END firebase_service] -->
        <!-- [START firebase_iid_service] -->
        <service
            android:name="com.amazonaws.amplify.pushnotification.MyFirebaseInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
            </intent-filter>
        </service>
        <!-- [END firebase_iid_service] -->
        <receiver
            android:name="com.amazonaws.mobileconnectors.pinpoint.targeting.notification.PinpointNotificationReceiver"
            android:exported="false" >
            <intent-filter>
                <action android:name="com.amazonaws.intent.fcm.NOTIFICATION_OPEN" />
            </intent-filter>
        </receiver>
    </application>
```

8. following the [link](https://firebase.google.com/docs/cloud-messaging/android/client?authuser=0) to integrate this app with Google Firebase