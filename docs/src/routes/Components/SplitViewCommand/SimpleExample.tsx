import * as React from "react";
import * as PropTypes from "prop-types";

import SplitViewCommand from "react-uwp/SplitViewCommand";

const baseStyle: React.CSSProperties = {
  width: 240
};
export default class SimpleExample extends React.Component<{}, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    return (
      <div>
        <SplitViewCommand
          style={baseStyle}
          label="Shuffle"
          icon="ShuffleLegacy"
        />

        <SplitViewCommand
          style={baseStyle}
          label="Print"
          icon="PrintLegacy"
          visited
        />

        <SplitViewCommand
          style={baseStyle}
          label="Mail"
          icon="MailLegacy"
          visited
          isTenFt
        />
      </div>
    );
  }
}
