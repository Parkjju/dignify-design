// 시안 공통 샘플 데이터 — 커버 클래스는 Foundations › 앨범 커버. Controls에서 JSON으로 바꿀 수 있다.
export const T = {
  cannons: { cover: 'a-cannons', title: 'Cannons', artist: 'Phil Wickham' },
  seasons: { cover: 'a-seasons', title: 'seasons', artist: 'wave to earth' },
  loveya: { cover: 'a-loveya', title: 'LOVE YA!', artist: '혁오' },
  ohio: { cover: 'a-ohio', title: 'Ohio', artist: '혁오' },
  tomboy: { cover: 'a-tomboy', title: 'TOMBOY', artist: '혁오' },
  bigvoid: { cover: 'a-bigvoid', title: 'BIG VOID', artist: '실리카겔' },
  billann: { cover: 'a-billann', title: 'Bill Loves Ann', artist: '퍼플웨일' },
  truth: { cover: 'a-truth', title: 'Truthbuster', artist: '놀이도감' },
  farewell: { cover: 'a-farewell', title: 'Farewell to Arms!', artist: '잔나비' },
  friends: { cover: 'a-friends', title: 'FRIENDS (feat. Friends)', artist: 'shinjihang' },
  intro: { cover: 'a-intro', title: 'Introduction to a Man', artist: '윤상' },
  blame: { cover: 'a-blame', title: 'Blame', artist: 'creespy' },
  shanty: { cover: 'a-shanty', title: 'Shanty', artist: 'Jio' },
  lonely: { cover: 'a-lonely', title: 'Lonely Town, Lonely Street', artist: 'Bill Withers' },
  findme: { cover: 'a-findme', title: 'Find Me!', artist: 'The Poles' },
  wss: { cover: 'a-wss', title: 'work, shit, sleep', artist: 'jisokuryClub' },
  comedown: { cover: 'a-comedown', title: 'Comedown', artist: 'Jazzbois' },
  cheeky: { cover: 'a-cheeky', title: 'Cheeky Bastard (feat. Michael Britt…', artist: 'Bart Dietvorst' },
  bulssi: { cover: 'a-bulssi', title: '불씨', artist: '컨파인드 화이트' },
  bluff: { cover: 'a-bluff', title: 'BLUFF', artist: '존박' },
  always: { cover: 'a-always', title: 'Always You', artist: 'Supertaste' },
  fireworks: { cover: 'a-fireworks', title: '주저하는 연인들을 위해', artist: '잔나비' },
}

export const PICKS = [
  { nickname: 'digger_lover', verified: true, time: '12분 전', title: '모두가 사랑하는 밴드', covers: ['a-loveya', 'a-ohio', 'a-tomboy'], trackCount: 12, reactions: 3, reacted: true },
  { nickname: 'wavelover', time: '1시간 전', title: '국내 브릿팝 루키 🔥', covers: ['a-bigvoid', 'a-billann', 'a-truth'], trackCount: 10, reactions: 1 },
]

export const CRATE = [
  { date: '2026년 10월 7일', items: [T.farewell, T.friends, T.intro, T.seasons, T.bulssi] },
  { date: '2026년 10월 5일', items: [T.blame, T.shanty] },
  { date: '2026년 10월 1일', items: [T.lonely, T.ohio, T.bigvoid, T.findme, T.wss] },
  { date: '2026년 9월 28일', items: [T.comedown, T.truth, T.billann] },
  { date: '2026년 9월 24일', items: [T.cannons, T.tomboy] },
]
