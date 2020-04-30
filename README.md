# Bindable Icons

Bindable Icons is an optional icon set that can be used with [Bindable](https://github.com/bindable-ui/bindable). Both Bindable and Bindable-Icons are built as an [Aurelia plugin](https://aurelia.io/docs/plugins/write-new-plugin#introduction) and work with [Aurelia JS](https://aurelia.io/home). The [`c-icon`](https://bindable-ui.com/#/components/icon/properties) component in Bindable places svg icons on the page by pointing to a svg sprite map that this plugin creates. If you choose not to use Bindable Icons you would need to include your own svg sprite map in your app. You can get [more info about svg maps here](https://css-tricks.com/svg-symbol-good-choice-icons/). 

## Install

`npm i @bindable-ui/bindable-icons`

## Usage

You will need to register this plugin in your app. Place this in src/main.ts
```
aurelia.use
  ...
  .plugin(PLATFORM.moduleName('@bindable-ui/bindable-icons'))
```

Place this where you would like the svg sprite map placed in your code.

`<bindable-icons></bindable-icons>`
