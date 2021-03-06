Cordova/Phonegap Cloud Settings Plugin Example
==============================================

This repo contains an example project which illustrates use of the [Cordova Cloud Settings plugin](https://github.com/dpa99c/cordova-plugin-cloud-settings).

The example supports the Android and iOS platforms.

# Downloading

To download the example project, clone it using git:

    $ git clone https://github.com/dpa99c/cordova-plugin-cloud-settings-test

# Configuring

Install the Android and/or iOS platforms into the project
- `$ cordova platform add android`
- `$ cordova platform add ios`

For iOS, you'll need to change the app `id` in `config.xml` from `io.cordova.plugin.cloudsettings.test` to a package ID associated with your Apple Developer account that is setup for iCloud storage.

# Building and running

- Build and run the project:
- `$ cordova run android`
- `$ cordova run ios`

# License
================

The MIT License

Copyright (c) 2018-21 Dave Alden / Working Edge Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
