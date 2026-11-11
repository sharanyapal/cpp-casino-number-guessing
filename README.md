# Casino Number Guessing Game

Console number-guessing game with a virtual betting balance.

This repository contains the original files from a supplied collection, preserved without changing the source code.

## Contents

- `casino-game-number-guessing-game.cpp`

## Build notes

### Modern compiler variant
The file `casino-game-number-guessing-game.cpp` passed a **syntax-only C++17 compiler check** using `g++` in the packaging environment. To compile it with GCC:

```bash
g++ -std=c++17 "casino-game-number-guessing-game.cpp" -o app
./app
```

This is a compile check, **not** a functional test. Some programs write relative `.DAT` files; run them in an appropriate working directory.

## Notes

- The `.DAT` files (where present) are historical sample records included with the source, **not** Git LFS requirements. Review their contents before making this repo public.
- `.doc` files (where present) are archived output screenshots/examples, not modern documentation.
- Original author/contributor names and historical metadata may appear in the supplied files. No new ownership or open-source license is claimed. Check redistribution rights before public release.
- Code is provided as-is. No claims of production security or cross-platform compatibility.


## Run original C++ in your browser

This repository includes an [interactive WebAssembly console](https://sharanyapal.github.io/cpp-casino-number-guessing/). It compiles the original C++ source, with only browser/DOS compatibility adapters under `web/`. The original source files remain unchanged.

GitHub Actions builds and deploys the demo on changes to `main`. To enable the live site, use **Settings → Pages → Build and deployment → GitHub Actions**. Record files are temporary and reset on browser refresh.
