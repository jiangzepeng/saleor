import { storiesOf } from "@storybook/react";
import * as React from "react";

import MenuItemCreatePage from "../../../menus/components/MenuItemCreatePage";
import Decorator from "../../Decorator";

storiesOf("Views / Menus / Create menu item", module)
  .addDecorator(Decorator)
  .add("default", () => (
    <MenuItemCreatePage
      disabled={false}
      saveButtonBarState="default"
      onBack={undefined}
      onSubmit={undefined}
    />
  ));
