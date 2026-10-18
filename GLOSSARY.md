# CYBER STRIKE // Official Localization Glossary & Translator Guidelines

> **Target Platform**: Cyber Strike Global Account & Operations Portal  
> **Publisher**: D4C Studio Inc.  
> **Supported Locales**: `en` (English - Source), `vi` (Tiếng Việt), `de` (Deutsch), `es` (Español), `ja` (日本語), `ar` (العربية - RTL), `pseudo` (Stress Test)

---

## 1. Brand Terms & Do-Not-Translate (DNT) Registry

| Term | Classification | Action | Context & Rationale |
| :--- | :--- | :--- | :--- |
| **CYBER STRIKE** | Registered Trademark | **DO NOT TRANSLATE** | Core franchise brand identity. Must always remain in uppercase Latin script across all locales, including CJK and Arabic. |
| **D4C / D4C Studio** | Corporate Brand | **DO NOT TRANSLATE** | Publisher and identity provider name. Do not transliterate or translate. |
| **Steam / Valve** | 3rd-Party Trademark | **DO NOT TRANSLATE** | Valve Corporation platform identity. Must adhere to official Steam Web API branding rules. |
| **DMR** | Technical Acronym | **DO NOT TRANSLATE** | Designated Marksman Rifle. Standard international gaming and tactical acronym. Keep as "DMR". |
| **EXP** | Gaming Metric | **KEEP / ADAPT** | Standard Experience Points abbreviation. Can be kept as `EXP` or localized to common gaming equivalents (e.g., `XP`, `Điểm kinh nghiệm`). |
| **OpenID 2.0** | Protocol Name | **DO NOT TRANSLATE** | Technical web protocol standard. |

---

## 2. In-Game Lore & Asset Localization Matrix

| Source Term (EN) | Category | Localize / Keep | Context & Permitted Translations |
| :--- | :--- | :--- | :--- |
| **Operation Zero Hour** | Campaign Season | **Localize** | Seasonal in-game military campaign.<br>• **VI**: *Chiến dịch Giờ Số 0*<br>• **DE**: *Operation Stunde Null*<br>• **ES**: *Operación Hora Cero*<br>• **JA**: *オペレーション・ゼロアワー*<br>• **AR**: *عملية ساعة الصفر* |
| **Sector 07** | Map / Infiltration Zone | **Localize Prefix** | Fictional extraction sector. Keep numeric "07".<br>• **VI**: *Khu Vực 07*<br>• **DE**: *Sektor 07*<br>• **ES**: *Sector 07*<br>• **JA**: *セクター07*<br>• **AR**: *القطاع 07* |
| **Cyber Heist** | Mission Subtitle | **Localize / Adapt** | Tactical bank/data extraction raid.<br>• **VI**: *Vụ Đột Kích Điện Tử*<br>• **DE**: *Cyber-Raubzug*<br>• **ES**: *Atraco Cibernético*<br>• **JA**: *サイバーハイスト*<br>• **AR**: *السطو السيبراني* |
| **Viper Skin** | Weapon Cosmetic Blueprint | **Localize or Adapt** | Tier 7 legendary weapon skin featuring venomous green snake motifs.<br>• **VI**: *Skin Súng Viper* (hoặc *Skin Rắn Lục*)<br>• **DE**: *Viper-Waffenskin*<br>• **ES**: *Aspecto de Arma Víbora*<br>• **JA**: *ヴァイパースキン*<br>• **AR**: *مظهر فايبر* |
| **Neon Recon** | Cosmetic Blueprint Series | **Adapt** | High-visibility cyberpunk tactical weapon series.<br>• **VI**: *Thiết kế Neon Recon*<br>• **DE**: *Neon-Aufklärer-Skin*<br>• **ES**: *Diseño Reconocimiento Neón*<br>• **JA**: *ネオンレコン設計図*<br>• **AR**: *مخطط نيون ريكون* |
| **Ammo Crate** | Consumable Supply | **Localize** | In-game ammunition supply drop.<br>• **VI**: *Hòm Đạn*<br>• **DE**: *Munitionskiste*<br>• **ES**: *Caja de Munición*<br>• **JA**: *弾薬クレート*<br>• **AR**: *صندوق ذخيرة* |
| **Armor Pack** | Tactical Equipment | **Localize** | Single-use deployable kevlar/shield plates.<br>• **VI**: *Gói Giáp Chiến Thuật*<br>• **DE**: *Panzerungspaket*<br>• **ES**: *Paquete de Blindaje*<br>• **JA**: *アーマーパック*<br>• **AR**: *حزمة دروع* |
| **Cyber Key** | Currency / Key | **Localize** | Cryptographic key used to unlock vault supply drops.<br>• **VI**: *Chìa Khóa Cyber*<br>• **DE**: *Cyber-Schlüssel*<br>• **ES**: *Llave Cyber*<br>• **JA**: *サイバーキー*<br>• **AR**: *مفتاح سيبراني* |
| **Operative** | Player Persona | **Localize** | Player rank/identity. Use gender-neutral, disciplined tactical term.<br>• **VI**: *Đặc Vụ*<br>• **DE**: *Operative / Agent*<br>• **ES**: *Operativo / Agente*<br>• **JA**: *隊員*<br>• **AR**: *مقاتل / عميل* |

---

## 3. UI Functional Terminology & Plain-Language Guidelines

To maintain accessibility for non-native English speakers and prevent player confusion, the portal replaces obscure military jargon with clear functional UI terms:

| Avoid Obscure Jargon | Preferred Functional UI Term | Context & Placement |
| :--- | :--- | :--- |
| `AUTH_GATEWAY // SECTOR-07` | **Account Sign In / Account Center** | Primary login card heading |
| `TRANSMISSIONS & DISPATCHES` | **News & Game Updates** | News feed header |
| `OPERATIVE SUPPLY EXTRACTION` | **Daily Rewards // Check-in** | 7-Day reward calendar header |
| `COMM LINK TELEMETRY` | **Support / Global Server Telemetry** | Header status popover & footer links |
| `CREDENTIAL INGESTION` | **Username & Password** | Input field placeholders |

---

## 4. Typography & Script Handling Rules

1. **Text Length Expansion (+20% to +40%)**:
   - German (`de`) and Spanish (`es`) strings typically expand by 25% to 40% compared to English.
   - All interactive buttons and cards use `min-height`, `min-width: 0`, and flexible flexbox layouts (`white-space: normal; word-break: break-word`) to allow 2 to 3 lines of text without clipping.
   - Translators can test layout endurance by switching to the `🧪 Pseudo-Loc (+40%)` option in the language selector.

2. **Letter-Spacing & Uppercase Transformation**:
   - English and Neo-Brutalist headlines rely on wide tracking (`letter-spacing: 0.04em`) and `text-transform: uppercase`.
   - **CJK (Japanese `ja`)**: CSS automatically disables uppercase transformation and removes letter-spacing to prevent awkward character gaps.
   - **Arabic (`ar`)**: Arabic is a cursive connected script; CSS forces `letter-spacing: normal !important` and disables uppercase.
   - **Turkish (`tr`)**: When adding Turkish in future expansions, ensure proper `lang="tr"` attribute to prevent dotted/dotless `i` / `İ` capitalization corruption.

3. **RTL (Right-To-Left) Scripts (Arabic / Hebrew)**:
   - When `dir="rtl"` is activated, Neo-Brutalism box-shadows are mirrored from positive X to negative X (`-10px 10px 0 #000000`).
   - Action arrows (`→` / `&rarr;`) and navigation indicators are mirrored (`transform: scaleX(-1)`).
   - Layout alignments are governed by logical properties or mirrored absolute anchors.

---

## 5. Timezone & Locale Formatting Standards

1. **Daily Reset Standard**:
   - The global daily check-in resets strictly at **00:00 UTC**.
   - The UI automatically calculates the user's local equivalent using browser timezone APIs (e.g., `07:00 ICT (Local) / 00:00 UTC`).
   - Translators should never hardcode regional time zones into daily reward strings.

2. **Number & Currency Formatting**:
   - Dates must be formatted using `Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' })` to avoid MM/DD vs DD/MM ambiguity.
   - Numbers must be localized via `Intl.NumberFormat(locale)` (e.g., `50,000+` in EN vs `50.000+` in DE).
   - Prize pools must explicitly state currency code: `$25,000 USD`.

3. **ICU Pluralization Guidelines**:
   - When composing translations for quantities (e.g. `{count} DAYS`, `{count} AMMO CRATES`):
     - English / German / Spanish: 2 forms (one, other).
     - Russian / Polish: 3 forms (one, few, many).
     - Arabic: 6 forms (zero, one, two, few, many, other).
   - Never assemble localized sentences via string concatenation (`"Day " + number`). Use parameterized template strings.
