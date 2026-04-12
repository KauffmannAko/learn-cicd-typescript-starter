import { describe, expect, it } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  it("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null when the authorization header does not use the ApiKey scheme", () => {
    expect(getAPIKey({ authorization: "Bearer secret-key" })).toBeNull();
  });

  it("returns null when the authorization header does not include a key", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBeNull();
  });

  it("returns the API key when the authorization header uses the ApiKey scheme", () => {
    expect(getAPIKey({ authorization: "ApiKey secret-key" })).toBe(
      "secret-key",
    );
  });
});
