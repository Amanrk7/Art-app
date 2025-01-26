import { Main1 } from "./main1";
import { Main2 } from "./main2";
import { Main3 } from "./main3";
import { Main4 } from "./main4";
import { products } from "../Products";
import { Header } from "./header";

export function Container() {
  return (
    <>
      <Header />

      <div id="main1-parent">
        {/* ------trending today----- */}
        <Main1 data={products} />

        {/* ------art spotlights------ */}
        {/* <Main2 data={products} /> */}

        {/* -----spotlight on AI nft---*/}
        {/* <Main3 data={products} /> */}

        {/* ------notable collections --*/}
        {/* <Main4 data={products} /> */}
      </div>
    </>
  );
}
