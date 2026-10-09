// 자동 생성 파일 — 직접 고치지 말 것. 정본: dignify-design/tokens
import SwiftUI

enum DSColor {
    /// 주 액션·선택 상태·하입
    static let brand = Color(hex: 0x4B3FD8)
    /// brand 위 옅은 지면(브랜드마크 배경 등)
    static let brandLight = Color(hex: 0xEEF0FF)
    /// 브랜드 그라데이션 끝색(디깅 프로필 유형 카드·공유 카드)
    static let brandDeep = Color(hex: 0x2A2350)
    static let background = Color(hex: 0xFFFFFF)
    /// 카드·입력창 지면
    static let surface = Color(hex: 0xF3F4F6)
    static let textPrimary = Color(hex: 0x111827)
    static let textSecondary = Color(hex: 0x6B7280)
    /// placeholder·비활성 텍스트
    static let textTertiary = Color(hex: 0x9CA3AF)
    static let border = Color(hex: 0xD1D5DB)
    static let borderLight = Color(hex: 0xE5E7EB)
    static let divider = Color(hex: 0xF3F4F6)
    static let destructive = Color(hex: 0xEF4444)
    /// Picks 다크 지면. 앱은 라이트 고정, Picks만 예외
    static let pickBackground = Color(hex: 0x141420)
    /// Picks 카드
    static let pickSurface = Color(hex: 0x1E1E2A)
    /// Picks 카드 위에 뜨는 시트. 카드와 같으면 지면에 눌어붙어 보인다
    static let pickElevated = Color(hex: 0x282836)
    /// 다크 위 brand. #4B3FD8은 다크에 묻혀서 밝기만 올림
    static let pickAccent = Color(hex: 0x8F86FF)
    /// 피드·Picks 같은 어두운 지면 위 주 텍스트
    static let textOnDark = Color(hex: 0xFFFFFF)
    /// 어두운 지면 위 보조 텍스트(피드 아티스트명)
    static let textOnDarkSecondary = Color(hex: 0xFFFFFF, alpha: 0.75)
    /// 어두운 지면 위 메타(Picks 시간·곡 수)
    static let textOnDarkTertiary = Color(hex: 0xFFFFFF, alpha: 0.45)
    /// 어두운 지면 위 액션 아이콘(피드 상세·공유)
    static let iconOnDark = Color(hex: 0xFFFFFF, alpha: 0.82)
    /// 어두운 지면 위 칩 지면
    static let fillOnDark = Color(hex: 0xFFFFFF, alpha: 0.15)
    /// Picks 반응·공유 버튼 지면
    static let fillOnDarkSubtle = Color(hex: 0xFFFFFF, alpha: 0.07)
    /// 어두운 지면 위 칩 테두리
    static let strokeOnDark = Color(hex: 0xFFFFFF, alpha: 0.2)
    /// 아트워크 위 어둡게 까는 막(Picks 미디어)
    static let scrim = Color(hex: 0x000000, alpha: 0.45)
    /// 아트워크 위 배지·남은 곡 수
    static let scrimStrong = Color(hex: 0x000000, alpha: 0.55)
}

enum DSTypography {
    static let display = Font.system(size: 40, weight: .bold)
    static let title1 = Font.system(size: 24, weight: .bold)
    static let title2 = Font.system(size: 18, weight: .bold)
    static let headline = Font.system(size: 17, weight: .semibold)
    static let body = Font.system(size: 15, weight: .regular)
    static let bodyMedium = Font.system(size: 15, weight: .medium)
    /// 보조 버튼·칩·"전체 보기" 링크
    static let callout = Font.system(size: 14, weight: .medium)
    /// 날짜 헤더·섹션 라벨·배지
    static let label = Font.system(size: 13, weight: .semibold)
    static let caption = Font.system(size: 12, weight: .regular)
    /// 배지·메타 정보 강조
    static let captionStrong = Font.system(size: 12, weight: .semibold)
    static let micro = Font.system(size: 10.5, weight: .regular)
    /// title1 별칭(기존 코드 호환)
    static let title = title1
}

enum DSRadius {
    /// 썸네일·작은 카드
    static let small: CGFloat = 12
    /// 버튼·입력창
    static let medium: CGFloat = 16
    /// 카드·아트워크
    static let large: CGFloat = 24
    /// 시트
    static let extraLarge: CGFloat = 28
    /// 캡슐·원형
    static let full: CGFloat = 999
}

enum DSSpacing {
    static let x0_5: CGFloat = 2
    static let x1: CGFloat = 4
    static let x1_5: CGFloat = 6
    static let x2: CGFloat = 8
    static let x2_5: CGFloat = 10
    static let x3: CGFloat = 12
    static let x3_5: CGFloat = 14
    static let x4: CGFloat = 16
    static let x5: CGFloat = 20
    static let x6: CGFloat = 24
    static let x8: CGFloat = 32
    static let x10: CGFloat = 40
}

extension Color {
    init(hex: UInt, alpha: Double = 1) {
        self.init(
            .sRGB,
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255,
            opacity: alpha
        )
    }
}
