import assert from "assert";
import request from "request";
import {URL} from "../../src/config/constants";
describe("JsonPatch Test", () => {
  it("should return 403  forbidden ", () => {
    let url = URL+"api/json-patch/";
    let json = {
      doc: {
        name: "Dalip",
        profession: "Software Developer",
        nationality: "Indian"
      },
      patch: [
          { op: "replace", path: "/name", value: "Dalip Thakkar" },
          { op: "add", path: "/organisation", value: "wmtc" },
          { op: "remove", path: "/nationality" },
          { op: "copy", from: "/name", path: "/fullname" },
          { op: "move", from: "/name", path: "/fullname" },
          { op: "test", path: "/profession", value: "Software Developer" }
        ]
    };
    /** request for testing json-patch
     */
    request(
      {
        url: url ,
        method: "POST",
        json: json
      },
      (err, response, data) => {
      assert.equal(response.status,"403");
      }
    );
  });
});
