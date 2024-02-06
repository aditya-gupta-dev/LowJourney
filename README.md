# Low Journey 

A web application that allows you to use multiple text-to-image model in one place.
By default stableDiffusion, ikeaInstructionsLoraSDXL, runwayMLStableDiffusion, pixelArt, openJourney is there. 

## Upcoming features

Planning to add a feature that lets users add their own ml models in it.

## Tech Stack 

* The app usees Svelte with Typescript on the frontend.
* Svelte-routing as a router.
* Firebase as the backend.
* FireStore to store user generated data.
* Hugging face for AI models.

## How to run

* Goto `src/config.js` and add your firebase credentials
* Install the dependencies
* `npm install`
* Run in development mode
* `npm run dev`

* Build the project
* `npm run build`

Thanks for reading and checking out the project :)
