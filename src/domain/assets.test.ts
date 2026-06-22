import { describe, expect, it } from "vitest";
import { publicAssetUrl } from "./assets";

describe("GitHub Pages asset paths", () => {
  it("places public assets below the configured project base path", () => {
    expect(publicAssetUrl("/images/plate.jpg", "/aritayaki/"))
      .toBe("/aritayaki/images/plate.jpg");
  });
});
