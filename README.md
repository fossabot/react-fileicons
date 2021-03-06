# react-fileicons - [![npm](https://img.shields.io/npm/v/react-fileicons.svg?color=%2345bf17&style=popout)](https://www.npmjs.com/package/react-fileicons) [![Build Status](https://travis-ci.com/tomxpcvx/react-fileicons.svg?branch=master)](https://travis-ci.com/tomxpcvx/react-fileicons)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons?ref=badge_shield)

react-fileicons is a simple and intuitive react component for visualizing file icons.

## Demo

You can reach the Storybook [here](https://tomxpcvx.wtf/react-fileicons/).

## Usage

First you should import the needed files.

```javascript
import FileIcon, { ColorScheme } from "react-fileicons";
```

After that you can use the FileIcon component.
To change the color of the component, you can use the built-in color list `ColorScheme`.

```javascript
<FileIcon extension="doc" colorScheme={ColorScheme.red} />
```

Alternatively, you can use your own color configurations. However, these must be in the following format.

```javascript
<FileIcon
	extension="doc"
	colorScheme={{ primary: "#1E88E5", secondary: "#1976D2" }}
/>
```

The following options can be used to access different designs:

```text
<FileIcon
    extension="doc"                 # only the first 4 characters are displayed
    colorScheme={ColorScheme.red}   # must be in the above format
    background="#fff"               # use to pass your background color to the component
    linearGradient                  # switches the component to the gradient design
    outline                         # switches the component to the outline design
    smallest                        # activates the smallest design
    small                           # activates the small design
    medium                          # activates the medium design
/>
```

Properties of the designs should only be used in the combination size and type.
If you use `smallest` or `small` with `medium` at the same time, `medium` overwrites both.
If you use `outline` and `linearGradient` at the same time, `outline` overwrites `linearGradient`.

## Known issues

Bugs can be found [here](https://github.com/tomxpcvx/react-fileicons/labels/bug).

## Changelog

Changelog can be found [here](https://github.com/tomxpcvx/react-fileicons/wiki/Changelog).

## Contribute

### Pull Requests

If you make any changes or improvements to this project, please make a pull request to merge your changes with the upstream.

## Thanks to ❤

-   React
-   Storybook
-   styled components
-   Material UI Colors

## License

react-fileicons is licensed under the MIT license. Please see [LICENSE.md](https://github.com/tomxpcvx/react-fileicons/blob/master/LICENSE.md) for more info.


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Ftomxpcvx%2Freact-fileicons?ref=badge_large)