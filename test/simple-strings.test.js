"use strict";
var expect = require("must")
var ss = require("../")

describe("simple-strings", function () {
  describe("#startsWith", function () {
    it("should work", function () {
      expect(ss.startsWith("foo", "f")).to.be.true()
    })
  })

  describe("#endsWith", function () {
    it("should work", function () {
      expect(ss.endsWith("foo", "o")).to.be.true()
    })
  })

  describe("#contains", function () {
    it("should work", function () {
      expect(ss.contains("foobarbaz", "bar")).to.be.true()
    })
  })

  describe("#rsplit", function () {
    it("should have defaults like builtin", function () {
      var s = "foo bar baz"
      expect(ss.rsplit(s)).to.eql(s.split())
    })

    it("should split like builtin", function () {
      var s = "foo bar baz"
      expect(ss.rsplit(s, " ")).to.eql(s.split(" "))
    })

    it("should limit from right", function () {
      var res = ss.rsplit("foo bar baz", " ", 1)
      expect(res).to.eql(["baz"])
    })
  })
})
