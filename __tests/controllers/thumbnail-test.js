import assert from "assert";
import request from "request";
import {URL} from "../../src/config/constants";

describe("Thumbnail Test", () => {
  it("should return 403 status", () => {
    let url = URL+"api/thumbnail-generate/";
    request(
      {
        url: url,
        method: "POST",
        json: {
          img:
            "https://blog.socialcops.com/wp-content/uploads/2015/08/Ishus-Internship_option1.png"
        }
      },
      (err, response, data) => {
        assert.equal(response.status, "403");
      }
    );
  });
});
