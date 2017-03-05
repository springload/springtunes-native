## Springtunes: React Native

This is a demo React Native App, so we can learn about the technology.

Follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html) to set up the tools you'll need.


### Signing authorities

To test on a real device, you'll need to have xCode signed in to the Apple Developer Programme.

### Important note

To develop on the iOS simulator, the default settings in `AppDelegate.m` (xcode)
will be fine:

```
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```

For developing on a device rapidly, you can change `localhost` above to your machine's local IP address, eg:

```
jsCodeLocation = [NSURL URLWithString:@"http://10.0.0.96:8081/index.ios.bundle?platform=ios&dev=true"];
```

__note__: This will only work with real devices, not with builds targeting the iOS simulator.

When you want to develop/test on a real device, it's easiest to bundle the JS
with the app. You can do that by uncommenting this line:

```
//   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
```


## Features/things to do

* [ ] Styling the application (understanding styling in React Native)
* [ ] Volume Slider
* [ ] Track detail view (with photo/artist details)
* [ ] Some kind of track history or playlist listing view (to demo the ListView component)



