# FontChecker

FontChecker is a font tool based on opentype.js that provides font inspection, language recognition, character set checking, and sample generation features.

## Features

- **CJK Font Inspection**:
  - Supports inspecting the Unicode range of fonts (e.g., CJK Unified Ideographs).
  - Supports inspecting the CID tables of fonts (e.g., Adobe-CNS1, Adobe-Japan1, etc.).
  - Supports inspecting local character sets (e.g., Big5, JIS, KS, etc.).

- **Language Recognition**:
  - Recognizes the language of fonts based on their Unicode range or CID tables.

- **Sample Generation**:
  - Generates SVG samples based on fonts (if generation fails, displays using browser's `@font-face`).
  - Supports custom sample text and saves it to the browser's `localStorage`.
  - Dynamically generates font inspection results and samples based on the font's language and character set.

## Usage

Please [download the ZIP file](https://github.com/ButTaiwan/fontchecker/archive/refs/heads/main.zip), extract it on your computer, open `index.html` in your browser, and drag the font file into the interface.

## Technical Limitations

- Currently, TTC files are not supported (due to limitations of `opentype.js`).
- Webdings and similar symbol font files are not yet handled.
- The tool primarily supports CJK fonts, with limited support for fonts in other languages.
- Contributions are welcome to expand the content of `langInfo.js` and `charset.js` to support more languages and character sets. Contributions to develop additional features are also welcome.

## Technical Details

- **Key Technologies**:
  - [opentype.js](https://github.com/opentypejs/opentype.js) for parsing font files.

- **File Structure**:
  - `index.html`: Main web interface.
  - `langInfo.js`: Defines multilingual UI text and configuration information for each language (e.g., inspection methods, sample text, etc.).
  - `charset.js`: Local character set code tables for CJK languages.

# 繁體中文

FontChecker 是一個基於 opentype.js 的字型工具，提供字型檢查、語系辨識、字集檢查以及樣本生成功能。

## 功能特性

- **CJK 字型檢查**：
  - 支援檢查字型的 Unicode 範圍（如 CJK Unified Ideographs）。
  - 支援檢查字型的 CID 表（如 Adobe-CNS1、Adobe-Japan1 等）。
  - 支援檢查本地字集（如 Big5、JIS、KS 等）。

- **語系辨識**：
  - 根據字型的 Unicode 範圍或 CID 表，辨識字型的語系。

- **樣本生成**：
  - 根據字型生成 SVG 格式的樣本（無法生成時則以瀏覽器的 `@font-face` 顯示）。
  - 支援自定義樣本文字，並保存到瀏覽器的 `localStorage`。
  - 根據字型的語系和字集，動態生成字型檢查結果和樣本。

## 使用方式

請[下載 ZIP 檔](https://github.com/ButTaiwan/fontchecker/archive/refs/heads/main.zip)後解壓在您的電腦上，用瀏覽器開啟 `index.html`，並將字型檔拖進去即可。

## 技術限制

- 目前不支援 TTC 檔案。（因為 `opentype.js` 的限制）
- 目前尚未處理 Webdings 之類的圖案字型檔。
- 目前主要支援的是 CJK 字型，對於其他語系字型支援不足。
- 歡迎協助 PullRequest 擴充 `langInfo.js` 與 `charset.js` 的內容，支援更多語言與字集。亦歡迎協助開發更多功能。

## 技術細節

- **主要技術**：
  - [opentype.js](https://github.com/opentypejs/opentype.js) 用於解析字型檔案。

- **檔案結構**：
  - `index.html`：主要的網頁界面。
  - `langInfo.js`：定義多語言UI文字，與各語言組態資訊（如何檢查、範例文字等）。
  - `charset.js`：CJK各語言的本地字集字碼表。

# 日本語

FontChecker は、opentype.js をベースにしたフォントツールで、フォントの検査、言語識別、文字セットの検査、およびサンプル生成機能を提供します。

## 機能特性

- **CJK フォント検査**：
  - フォントの Unicode 範囲（例：CJK Unified Ideographs）を検査可能。
  - フォントの CID テーブル（例：Adobe-CNS1、Adobe-Japan1 など）を検査可能。
  - ローカル文字セット（例：Big5、JIS、KS など）を検査可能。

- **言語識別**：
  - フォントの Unicode 範囲や CID テーブルに基づいて、フォントの言語を識別。

- **サンプル生成**：
  - フォントに基づいて SVG 形式のサンプルを生成（生成できない場合はブラウザの `@font-face` を使用して表示）。
  - ユーザー定義のサンプルテキストをサポートし、ブラウザの `localStorage` に保存可能。
  - フォントの言語と文字セットに基づいて、動的にフォント検査結果とサンプルを生成。

## 使用方法

[ZIPファイルをダウンロード](https://github.com/ButTaiwan/fontchecker/archive/refs/heads/main.zip)し、コンピュータに解凍した後、ブラウザで `index.html` を開き、フォントファイルをインターフェースにドラッグしてください。

## 技術的制限

- 現在、TTCファイルはサポートされていません（`opentype.js` の制限による）。
- Webdingsなどのシンボルフォントファイルはまだ処理されていません。
- 主にCJKフォントをサポートしており、他の言語のフォントに対するサポートは限定的です。
- `langInfo.js` と `charset.js` の内容を拡張して、より多くの言語と文字セットをサポートするための PullRequest を歓迎します。

## 技術詳細

- **主な技術**：
  - [opentype.js](https://github.com/opentypejs/opentype.js) を使用してフォントファイルを解析。

- **ファイル構成**：
  - `index.html`：メインのウェブインターフェース。
  - `langInfo.js`：多言語 UI テキストと各言語の設定情報（検査方法、サンプルテキストなど）を定義。
  - `charset.js`：CJK 各言語のローカル文字セットコード表。
