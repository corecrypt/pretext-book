import React from "react";
import { PretextStateContext } from "../state";
import { ReplacerComponent } from "../replacers/replacer-factory";

export const Insert: ReplacerComponent = function ({ node }) {
    const state = React.useContext(PretextStateContext);

    return <ins className="insert">{state.processContent(node.children)}</ins>;
};
