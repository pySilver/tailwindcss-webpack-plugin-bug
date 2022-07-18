import * as Turbo from "@hotwired/turbo";
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";
import { Toggle, Tabs } from "tailwindcss-stimulus-components";
import { Autocomplete } from "stimulus-autocomplete";

const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

application.register("autocomplete", Autocomplete);
application.register("tabs", Tabs);
application.register("toggle", Toggle);

/**
 * Optional debug mode
 * Enable at runtime using:
 * `stimulusApplication.debug = true;`
 */
if (process.env.NODE_ENV === "development") {
    window.stimulusApplication = application;
    // stimulusApplication.debug = true;
}