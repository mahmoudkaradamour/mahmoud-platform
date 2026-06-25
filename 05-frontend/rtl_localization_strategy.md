# RTL & Arabic Localization Strategy

## 1. Zero Cognitive Load in Arabic
Arabic users process information Right-to-Left (RTL). The UI must mirror not just text, but the entire layout logic.

*   **Mirroring**: Icons with directional meaning (arrows, progress bars) must be flipped.
*   **Typography**: Using `Cairo` font with specific line-height and letter-spacing for optimal readability on mobile screens.
*   **Numerals**: Support for both Western (123) and Arabic (١٢٣) numerals based on user preference.

## 2. Technical Implementation
*   **Framework**: Utilizing Flutter's `intl` package.
*   **Adaptive Layout**: Using `Directionality` widgets and avoiding hardcoded `left/right` offsets (using `start/end` instead).
*   **Validation**: Real-time error messages must be linguistically and culturally appropriate in both formal and informal Arabic.
