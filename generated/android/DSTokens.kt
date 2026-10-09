// 자동 생성 파일 — 직접 고치지 말 것. 정본: dignify-design/tokens
package com.rta.dignify.core.designsystem

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

object DSColor {
    /** 주 액션·선택 상태·하입 */
    val brand = Color(0xFF4B3FD8)
    /** brand 위 옅은 지면(브랜드마크 배경 등) */
    val brandLight = Color(0xFFEEF0FF)
    /** 브랜드 그라데이션 끝색(디깅 프로필 유형 카드·공유 카드) */
    val brandDeep = Color(0xFF2A2350)
    val background = Color(0xFFFFFFFF)
    /** 카드·입력창 지면 */
    val surface = Color(0xFFF3F4F6)
    val textPrimary = Color(0xFF111827)
    val textSecondary = Color(0xFF6B7280)
    /** placeholder·비활성 텍스트 */
    val textTertiary = Color(0xFF9CA3AF)
    val border = Color(0xFFD1D5DB)
    val borderLight = Color(0xFFE5E7EB)
    val divider = Color(0xFFF3F4F6)
    val destructive = Color(0xFFEF4444)
    /** Picks 다크 지면. 앱은 라이트 고정, Picks만 예외 */
    val pickBackground = Color(0xFF141420)
    /** Picks 카드 */
    val pickSurface = Color(0xFF1E1E2A)
    /** Picks 카드 위에 뜨는 시트. 카드와 같으면 지면에 눌어붙어 보인다 */
    val pickElevated = Color(0xFF282836)
    /** 다크 위 brand. #4B3FD8은 다크에 묻혀서 밝기만 올림 */
    val pickAccent = Color(0xFF8F86FF)
    /** 피드·Picks 같은 어두운 지면 위 주 텍스트 */
    val textOnDark = Color(0xFFFFFFFF)
    /** 어두운 지면 위 보조 텍스트(피드 아티스트명) */
    val textOnDarkSecondary = Color(0xBFFFFFFF)
    /** 어두운 지면 위 메타(Picks 시간·곡 수) */
    val textOnDarkTertiary = Color(0x73FFFFFF)
    /** 어두운 지면 위 액션 아이콘(피드 상세·공유) */
    val iconOnDark = Color(0xD1FFFFFF)
    /** 어두운 지면 위 칩 지면 */
    val fillOnDark = Color(0x26FFFFFF)
    /** Picks 반응·공유 버튼 지면 */
    val fillOnDarkSubtle = Color(0x12FFFFFF)
    /** 어두운 지면 위 칩 테두리 */
    val strokeOnDark = Color(0x33FFFFFF)
    /** 아트워크 위 어둡게 까는 막(Picks 미디어) */
    val scrim = Color(0x73000000)
    /** 아트워크 위 배지·남은 곡 수 */
    val scrimStrong = Color(0x8C000000)
}

object DSTypography {
    val display = TextStyle(fontSize = 40.sp, fontWeight = FontWeight.Bold)
    val title1 = TextStyle(fontSize = 24.sp, fontWeight = FontWeight.Bold)
    val title2 = TextStyle(fontSize = 18.sp, fontWeight = FontWeight.Bold)
    val headline = TextStyle(fontSize = 17.sp, fontWeight = FontWeight.SemiBold)
    val body = TextStyle(fontSize = 15.sp, fontWeight = FontWeight.Normal)
    val bodyMedium = TextStyle(fontSize = 15.sp, fontWeight = FontWeight.Medium)
    /** 보조 버튼·칩·"전체 보기" 링크 */
    val callout = TextStyle(fontSize = 14.sp, fontWeight = FontWeight.Medium)
    /** 날짜 헤더·섹션 라벨·배지 */
    val label = TextStyle(fontSize = 13.sp, fontWeight = FontWeight.SemiBold)
    val caption = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Normal)
    /** 배지·메타 정보 강조 */
    val captionStrong = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.SemiBold)
    val micro = TextStyle(fontSize = 10.5f.sp, fontWeight = FontWeight.Normal)
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
