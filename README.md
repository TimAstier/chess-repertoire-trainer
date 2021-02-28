# Chess Repertoire Trainer

Train opening repertoires from lichess studies.  
_[UPDATE]: The studies [endpoint](https://lichess.org/api#tag/Studies) is restricted to SameOrigin requests..._

## Motivation

- Lichess [studies](https://lichess.org/study) are a great tool to maintain opening repertoires.
- There's no interactive way to review lines from studies.
- Chessable Move Trainer is great but it's too much work to import lines in the system.

## Solution

Use [lichess api](https://lichess.org/api#tag/Studies) to fetch the content of lichess studies and provide an interactive way to review lines.

## Roadmap

- [ ] Fetch PGN from a public lichess study.
- [ ] Fetch PGN from private lichess study.
- [ ] Find all uniques lines.
- [ ] Test user on one line.
- [ ] Possibility to define how deep in the line the user should be tested on.
- [ ] Create an account.
- [ ] Save link to personal studies.
- [ ] Save progress and use spaced repetition.

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
