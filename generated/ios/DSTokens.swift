// 자동 생성 파일 — 직접 고치지 말 것. 정본: dignify-design/tokens
import SwiftUI

enum DSColor {
    static let white7 = Color(hex: 0xFFFFFF, alpha: 0.07)
    static let white15 = Color(hex: 0xFFFFFF, alpha: 0.15)
    static let white20 = Color(hex: 0xFFFFFF, alpha: 0.2)
    static let white45 = Color(hex: 0xFFFFFF, alpha: 0.45)
    static let white75 = Color(hex: 0xFFFFFF, alpha: 0.75)
    static let white82 = Color(hex: 0xFFFFFF, alpha: 0.82)
    static let white100 = Color(hex: 0xFFFFFF)
    static let black45 = Color(hex: 0x000000, alpha: 0.45)
    static let black55 = Color(hex: 0x000000, alpha: 0.55)
    static let gray100 = Color(hex: 0xF3F4F6)
    static let gray200 = Color(hex: 0xE5E7EB)
    static let gray300 = Color(hex: 0xD1D5DB)
    static let gray400 = Color(hex: 0x9CA3AF)
    static let gray500 = Color(hex: 0x6B7280)
    static let gray900 = Color(hex: 0x111827)
    static let red500 = Color(hex: 0xEF4444)
    static let brand50 = Color(hex: 0xEEF0FF)
    /// 다크 지면 위 brand. 600은 다크에 묻혀서 밝기만 올림
    static let brand400 = Color(hex: 0x8F86FF)
    static let brand600 = Color(hex: 0x4B3FD8)
    static let brand900 = Color(hex: 0x2A2350)
    /// 주 액션·선택 상태·좋아요(하입). Tailwind의 DEFAULT처럼 color.brand = brand.600
    static let brand = brand600
    static let night800 = Color(hex: 0x282836)
    static let night900 = Color(hex: 0x1E1E2A)
    static let night950 = Color(hex: 0x141420)
    /// brand 위 옅은 지면(브랜드마크 배경 등)
    static let brandLight = brand50
    /// 브랜드 그라데이션 끝색(디깅 프로필 유형 카드·공유 카드)
    static let brandDeep = brand900
    static let background = white100
    /// 카드·입력창 지면
    static let surface = gray100
    static let textPrimary = gray900
    static let textSecondary = gray500
    /// placeholder·비활성 텍스트
    static let textTertiary = gray400
    static let border = gray300
    static let borderLight = gray200
    static let divider = gray100
    static let destructive = red500
    /// Picks 다크 지면. 앱은 라이트 고정, Picks만 예외
    static let pickBackground = night950
    /// Picks 카드
    static let pickSurface = night900
    /// Picks 카드 위에 뜨는 시트. 카드와 같으면 지면에 눌어붙어 보인다
    static let pickElevated = night800
    /// 다크 위 brand
    static let pickAccent = brand400
    /// 피드·Picks 같은 어두운 지면 위 주 텍스트
    static let textOnDark = white100
    /// 어두운 지면 위 보조 텍스트(피드 아티스트명)
    static let textOnDarkSecondary = white75
    /// 어두운 지면 위 메타(Picks 시간·곡 수)
    static let textOnDarkTertiary = white45
    /// 어두운 지면 위 액션 아이콘(피드 상세·공유)
    static let iconOnDark = white82
    /// 어두운 지면 위 칩 지면
    static let fillOnDark = white15
    /// Picks 반응·공유 버튼 지면
    static let fillOnDarkSubtle = white7
    /// 어두운 지면 위 칩 테두리
    static let strokeOnDark = white20
    /// 아트워크 위 어둡게 까는 막(Picks 미디어)
    static let scrim = black45
    /// 아트워크 위 배지·남은 곡 수
    static let scrimStrong = black55
}

enum DSTypography {
    static let text2xsRegular = Font.system(size: 10.5, weight: .regular)
    static let textXsRegular = Font.system(size: 12, weight: .regular)
    static let textXsSemibold = Font.system(size: 12, weight: .semibold)
    static let textSmSemibold = Font.system(size: 13, weight: .semibold)
    static let textMdMedium = Font.system(size: 14, weight: .medium)
    static let textBaseRegular = Font.system(size: 15, weight: .regular)
    static let textBaseMedium = Font.system(size: 15, weight: .medium)
    static let textLgSemibold = Font.system(size: 17, weight: .semibold)
    static let textXlBold = Font.system(size: 18, weight: .bold)
    static let text2xlBold = Font.system(size: 24, weight: .bold)
    static let text5xlBold = Font.system(size: 40, weight: .bold)
    static let display = text5xlBold
    static let title1 = text2xlBold
    static let title2 = textXlBold
    static let headline = textLgSemibold
    static let body = textBaseRegular
    static let bodyMedium = textBaseMedium
    /// 보조 버튼·칩·"전체 보기" 링크
    static let callout = textMdMedium
    /// 날짜 헤더·섹션 라벨·배지
    static let label = textSmSemibold
    static let caption = textXsRegular
    /// 배지·메타 정보 강조
    static let captionStrong = textXsSemibold
    static let micro = text2xsRegular
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
