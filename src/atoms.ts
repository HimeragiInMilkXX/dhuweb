import { atom } from "jotai"

export type CourseType =

    '基礎ツール演習' |
    'Webサイトマークアップ演習' |
    'Webサイトスタイリング演習' |
    'Webサイトプロトタイプ演習' |
    'Webデザイン演習' |
    'Webサイト表現演習' |
    'Webサイト制作実践演習' |
    'Webサイト表現演習応用A' |
    'Webサイト表現演習応用B' |
    'Webサイト制作プロジェクト演習'

export const courseAtom = atom<CourseType | null>(null);