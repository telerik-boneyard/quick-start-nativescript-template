Photo Album Sample App for NativeScript
=============================
This repository contains the complete Photo Album Native sample app built on top of the online Photo Album Native Getting Started tutorial for the Native Script framework. The Photo Album Native app is a sample native mobile app showcasing the usage of the [NativeScript framework](http://github.com/nativescript/nativescript) and the integration of the Telerik Platform services into this app. To download the source code, just click on the "Download ZIP" button.

![Alt text](/PhotoAlbumNative.png)

## Showcased features and SDKs

Here is a list of the features that are showcased in the Photo Album Native sample app:

- Creating UI in XML using the built-in components and layouts.
- Binding properties and methods using to a view-model.
- Loading images from local resource files.
- Applying styles using CSS.
- Uploading files to Telerik Backend Services.
- Downloading files from Telerik Backend Services.

To implement all the features listed above, the sample app utilizes the following Telerik SDK:

- Telerik Backend Services JavaScript SDK - used to work with Telerik Backend Services.

## Requirements  

The following is a list of requirements for the sample app:

- **Active Telerik Platform account**  
To use this sample app you must have an active Telerik Platform account. Here are the possible options to have such an account: [http://platform.telerik.com](http://platform.telerik.com).

- **Telerik AppBuilder**  
Telerik AppBuilder In-Browser Client, Windows Client or Visual Studio Extension.

## Configuring the sample app
The Photo Album Native sample app comes fully functional, but in order to see it in action, you should link it to your own Telerik Platform account.

What you need to set:

1. **API key for Telerik Backend Services**  
This links the sample mobile app to a project in Telerik Backend Services. First, create a Telerik Backend Services project in the Photo Album Native app solution and enable the Files option. Then open the /app/view-model.js file and replace $YOUR_API_KEY$ with the API Key of your 'Photo Album' Backend Services project.
2. **Use local images the first time you use the app**
Make your *photoItems* property return *array* instead of *backendArray* as your Telerik Backend Services project does not contain any images at the moment. Later, after you run the app for the first time and tap the button to fill the Telerik Backend Services project with images, you can make the *photoItems* property return *backendArray* again.

## Running the sample app
Once the app is configured as described in the previous section, you can run it either on a real device or in the simulator. See more info how in [this help article](http://docs.telerik.com/platform/appbuilder/nativescript/running-your-app/run-app).

> Make sure the emulator or the device you use have working Internet connection when running the sample. Internet connection is necessary in order to connect to the cloud.