// 자동 생성 파일 — 직접 고치지 말 것. 정본: dignify-design/tokens
package com.rta.dignify.core.designsystem

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

object DSColor {
    val white7 = Color(0x12FFFFFF)
    val white15 = Color(0x26FFFFFF)
    val white20 = Color(0x33FFFFFF)
    val white45 = Color(0x73FFFFFF)
    val white75 = Color(0xBFFFFFFF)
    val white82 = Color(0xD1FFFFFF)
    val white100 = Color(0xFFFFFFFF)
    val black45 = Color(0x73000000)
    val black55 = Color(0x8C000000)
    val gray100 = Color(0xFFF3F4F6)
    val gray200 = Color(0xFFE5E7EB)
    val gray300 = Color(0xFFD1D5DB)
    val gray400 = Color(0xFF9CA3AF)
    val gray500 = Color(0xFF6B7280)
    val gray900 = Color(0xFF111827)
    val red500 = Color(0xFFEF4444)
    val brand50 = Color(0xFFEEF0FF)
    /** 다크 지면 위 brand. 600은 다크에 묻혀서 밝기만 올림 */
    val brand400 = Color(0xFF8F86FF)
    val brand600 = Color(0xFF4B3FD8)
    val brand900 = Color(0xFF2A2350)
    /** 주 액션·선택 상태·좋아요(하입). Tailwind의 DEFAULT처럼 color.brand = brand.600 */
    val brand = brand600
    val night800 = Color(0xFF282836)
    val night900 = Color(0xFF1E1E2A)
    val night950 = Color(0xFF141420)
    /** brand 위 옅은 지면(브랜드마크 배경 등) */
    val brandLight = brand50
    /** 브랜드 그라데이션 끝색(디깅 프로필 유형 카드·공유 카드) */
    val brandDeep = brand900
    val background = white100
    /** 카드·입력창 지면 */
    val surface = gray100
    val textPrimary = gray900
    val textSecondary = gray500
    /** placeholder·비활성 텍스트 */
    val textTertiary = gray400
    val border = gray300
    val borderLight = gray200
    val divider = gray100
    val destructive = red500
    /** Picks 다크 지면. 앱은 라이트 고정, Picks만 예외 */
    val pickBackground = night950
    /** Picks 카드 */
    val pickSurface = night900
    /** Picks 카드 위에 뜨는 시트. 카드와 같으면 지면에 눌어붙어 보인다 */
    val pickElevated = night800
    /** 다크 위 brand */
    val pickAccent = brand400
    /** 피드·Picks 같은 어두운 지면 위 주 텍스트 */
    val textOnDark = white100
    /** 어두운 지면 위 보조 텍스트(피드 아티스트명) */
    val textOnDarkSecondary = white75
    /** 어두운 지면 위 메타(Picks 시간·곡 수) */
    val textOnDarkTertiary = white45
    /** 어두운 지면 위 액션 아이콘(피드 상세·공유) */
    val iconOnDark = white82
    /** 어두운 지면 위 칩 지면 */
    val fillOnDark = white15
    /** Picks 반응·공유 버튼 지면 */
    val fillOnDarkSubtle = white7
    /** 어두운 지면 위 칩 테두리 */
    val strokeOnDark = white20
    /** 아트워크 위 어둡게 까는 막(Picks 미디어) */
    val scrim = black45
    /** 아트워크 위 배지·남은 곡 수 */
    val scrimStrong = black55
}

object DSTypography {
    val text2xsRegular = TextStyle(fontSize = 10.5f.sp, fontWeight = FontWeight.Normal)
    val textXsRegular = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Normal)
    val textXsSemibold = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    val textSmSemibold = TextStyle(fontSize = 13.sp, fontWeight = FontWeight.SemiBold)
    val textMdMedium = TextStyle(fontSize = 14.sp, fontWeight = FontWeight.Medium)
    val textBaseRegular = TextStyle(fontSize = 15.sp, fontWeight = FontWeight.Normal)
    val textBaseMedium = TextStyle(fontSize = 15.sp, fontWeight = FontWeight.Medium)
    val textLgSemibold = TextStyle(fontSize = 17.sp, fontWeight = FontWeight.SemiBold)
    val textXlBold = TextStyle(fontSize = 18.sp, fontWeight = FontWeight.Bold)
    val text2xlBold = TextStyle(fontSize = 24.sp, fontWeight = FontWeight.Bold)
    val text5xlBold = TextStyle(fontSize = 40.sp, fontWeight = FontWeight.Bold)
    val display = text5xlBold
    val title1 = text2xlBold
    val title2 = textXlBold
    val headline = textLgSemibold
    val body = textBaseRegular
    val bodyMedium = textBaseMedium
    /** 보조 버튼·칩·"전체 보기" 링크 */
    val callout = textMdMedium
    /** 날짜 헤더·섹션 라벨·배지 */
    val label = textSmSemibold
    val caption = textXsRegular
    /** 배지·메타 정보 강조 */
    val captionStrong = textXsSemibold
    val micro = text2xsRegular
    /** title1 별칭(기존 코드 호환) */
    val title = title1
}

object DSRadius {
    /** 썸네일·작은 카드 */
    val small = 12.dp
    /** 버튼·입력창 */
    val medium = 16.dp
    /** 카드·아트워크 */
    val large = 24.dp
    /** 시트 */
    val extraLarge = 28.dp
    /** 캡슐·원형 */
    val full = 999.dp
}

object DSSpacing {
    val x0_5 = 2.dp
    val x1 = 4.dp
    val x1_5 = 6.dp
    val x2 = 8.dp
    val x2_5 = 10.dp
    val x3 = 12.dp
    val x3_5 = 14.dp
    val x4 = 16.dp
    val x5 = 20.dp
    val x6 = 24.dp
    val x8 = 32.dp
    val x10 = 40.dp
}
