declare var Jar: jvm.Jar;

namespace jvm {
  interface Jar {
    constructor(string)
    unpack(string): promise
  }
}
