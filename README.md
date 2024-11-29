
# Documentation

Why use CSS vars? They provide a nice and easy API for people to be able to customize the components even when they don't have access to the component itself
they also provide a cross-framework customization possibility, we could consume just 'web-components' from a Vue, React or Angular codebase.

Further development would be to split the index.css file into each component as well as adding unit tests, I would also add something like Storybook to document everything.

## Listing Card

The `listing-card` component displays property information, including an image slider, price, details, and actions.

### CSS Variables

|Variable|Description|Default Value|
|---|---|---|
|--card-border-radius|Border radius of the card|5px|
|--card-background-color|Background color of the card|hsla(0, 0%, 100%, 1)|
|--card-box-shadow|Box shadow for the card|0 2px 4px hsla(0, 0%, 0%, 0.1)|
|--card-max-width|Maximum width of the card|311px|

## Details Container

The `details-container` is a wrapper for property details such as price, badges, and other metadata.

|Variable|Description|Default Value|
|---|---|---|
|--details-padding|Padding around the container|17px 16px 16px|

## Badge

The `badge` component is a small, styled label used to highlight specific information like "New Match". It comes with customizable color options.

|Variable|Description|Default Value|
|---|---|---|
|--badge-bg-color|Background color of the badge|hsla(154, 66%, 40%, 1)|
|--badge-text-color|Text color of the badge|hsla(0, 0%, 100%, 1)|
|--badge-font-size|Font size of the badge|11px|
|--badge-font-weight|Font weight of the badge|500|
|--badge-padding|Padding inside the badge|2px 8px|
|--badge-border-radius|Border radius of the badge|15px|

## Share Button

The `share-button` component is a circular button used to trigger share functionality.


|Variable|Description|Default Value|
|---|---|---|
|--share-button-bg-color|Background color of the button|hsla(0, 0%, 0%, 0.5)|
|--share-button-color|Icon color|hsla(0, 0%, 100%, 1)|
|--share-button-width|Width of the button|40px|
|--share-button-height|Height of the button|40px|
|--share-button-border-radius|Border radius|50%|
|--share-button-padding|Padding inside the button|10px|
