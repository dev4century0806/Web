/**
 * CYBER STRIKE // OFFICIAL GLOBAL ACCOUNT & OPERATIONS PORTAL
 * Universal I18n Engine:
 * - 5 Supported Core Languages (EN, VI, DE, ES, JA)
 * - URL Routing (?lang=de / #lang=de) & Browser Auto-Detection
 * - UTC Reset Engine & Dynamic Local Timezone Converter
 * - Native Intl.DateTimeFormat & Intl.NumberFormat
 * - Publisher News Region Filter & Translation Fallback
 * - Privacy-Preserving Masked Steam ID & 1-Click Copy
 * - GDPR Cookie Consent Banner
 * - Anti-Double-Claim Check-in & Audio Engine
 */

// ==========================================================================
// 1. UNIVERSAL 5-LANGUAGE TRANSLATION DICTIONARY
// ==========================================================================
const TRANSLATIONS = {
  en: {
    global_servers: "GLOBAL SERVERS",
    server_online: "ONLINE",
    cluster_health_title: "GLOBAL SERVER CLUSTERS",
    view_telemetry: "View Full Server Telemetry →",
    nav_events: "Events",
    nav_checkin: "Daily Rewards",
    nav_news: "News",
    nav_support: "Support",
    settings_title: "SYSTEM SETTINGS",
    settings_sfx: "SFX Audio Feedback",
    user_lvl: "LVL",
    btn_logout: "LOGOUT",
    badge_event: "EVENT LIVE",
    announcement_text: 'Season 3: "Operation Zero Hour" is active! 2x EXP bonus enabled on all global servers.',
    event_tag: "LIMITED TIME EVENT",
    event_timer: "ENDS IN: 3D 14H",
    event_title: "OPERATION ZERO HOUR: CYBER HEIST",
    event_desc: "Infiltrate Sector 07 in the new tactical extraction raid. Double weapon EXP, exclusive Neon Strike skin drops, and special community milestone rewards.",
    btn_event_action: "VIEW EVENT MISSIONS & DETAILS →",
    checkin_title: "DAILY REWARDS // CHECK-IN",
    resets_in: "RESETS IN:",
    streak_teaser: "7-DAY ROTATION",
    checkin_subtitle: "Log in each consecutive day to claim in-game ammunition, currency, and exclusive cosmetic blueprints.",
    day_1: "DAY 1",
    day_2: "DAY 2",
    day_3: "DAY 3",
    day_4: "DAY 4",
    day_5: "DAY 5",
    day_6: "DAY 6",
    day_7: "DAY 7",
    badge_today: "TODAY",
    reward_gold: "Gold",
    reward_exp: "EXP Boost",
    reward_ammo: "Ammo Crate",
    reward_credits: "Credits",
    reward_armor: "Armor Pack",
    reward_key: "Cyber Key",
    reward_skin: "Viper Skin",
    checkin_lock_hint: "Sign in with Steam to claim today's reward: <strong>x250 D4C Credits</strong>!",
    streak_grace_note: "🛡️ Streak Protection: 24-hour grace window applies across international timezones. 1 missed day drops streak count by 1 tier.",
    news_title: "NEWS & GAME UPDATES",
    filter_all: "ALL",
    cat_update: "UPDATE",
    cat_event: "EVENT",
    cat_maint: "MAINTENANCE",
    badge_new: "NEW",
    read_more: "Read dispatch →",
    news_1_title: "Patch 2.4.0: Weapon Balance & Anti-Cheat Protocol V4",
    news_1_snippet: "Revamped recoil patterns for DMR rifles, improved global cluster network tick rate, and streamlined client load times.",
    news_2_title: "Cyber Strike Global Championship: Open Regional Qualifiers",
    news_2_snippet: "Register your 5-operative squad for the $25,000 USD international prize pool. Open qualifiers running across Americas, EMEA, and APAC brackets.",
    news_3_title: "Global Server Maintenance & Routing Optimization Completed",
    news_3_snippet: "Infrastructure database indexing successfully completed across Frankfurt, Virginia, Singapore, and São Paulo nodes.",
    auth_header_tag: "ACCOUNT CENTER // STEAM & D4C",
    status_ready: "SECURE GATEWAY",
    login_heading: "ACCOUNT SIGN IN",
    login_subheading: "Sign in to claim daily rewards and get game updates",
    steam_subtext: "SIGN IN THROUGH",
    steam_maintext: "STEAM",
    steam_security_note: "We redirect to Steam OpenID. We will never ask for your Steam password.",
    d4c_accordion_btn: "OR USE D4C ACCOUNT",
    d4c_accordion_hint: "D4C is an optional publisher account for cross-platform play and direct recovery. Only use if already linked.",
    ph_user: "Username or email",
    ph_pass: "Password",
    ph_promo: "Enter gift or promo code...",
    remember_me: "Remember login",
    forgot_pass: "Forgot password?",
    btn_signin: "SIGN IN",
    no_account: "Don't have a D4C account?",
    register_now: "Register now",
    more_platforms: "EXPANDING TO:",
    global_active: "GLOBAL CLUSTERS ACTIVE",
    portal_ver: "PORTAL: V2.4.0",
    community_title: "COMMUNITY & CLIENT",
    dl_client: "GET GAME ON STEAM",
    dl_sub: "Steam Store (New Tab) • App Protocol",
    discord_community: "OFFICIAL SQUAD DISCORD",
    discord_sub: "50,000+ Active Operatives",
    rank_verified: "VERIFIED OPERATIVE",
    steam_linked: "STEAM CONNECTED ✓",
    metric_steamid: "STEAM ID:",
    btn_copy: "COPY",
    metric_rank: "COMBAT RANK:",
    rank_value: "LEVEL 42 (SPECIALIST)",
    metric_streak: "CURRENT STREAK:",
    active_checkin_title: "DAILY REWARDS // CLAIM",
    checkin_ready_text: "Day 5 reward is available! Check in to receive your supply drop directly in your in-game vault.",
    ready: "READY",
    btn_claim: "CLAIM TODAY'S REWARD (DAY 5)",
    milestones_title: "STREAK MILESTONES",
    milestones_sub: "Reach consecutive check-in milestones for legendary drops",
    history_title: "RECENT REWARD ACTIVITY",
    redeem_title: "REDEEM GIFT CODE",
    redeem_desc: "Enter community gift or event code to redeem special rewards:",
    btn_redeem: "REDEEM",
    primary_auth_title: "PRIMARY AUTHENTICATION",
    bindings_title: "OPTIONAL PLATFORM LINKS",
    primary_login: "Primary Authentication ID",
    connected: "CONNECTED",
    twitch_desc: "Watch streams to earn loot",
    discord_desc: "Sync squad rank & role",
    btn_link: "LINK",
    cookie_title: "Privacy & Cookie Preferences",
    cookie_desc: "We use essential cookies for authentication and session integrity. Optional telemetry cookies help optimize global cluster latency.",
    cookie_essential: "Essential Only",
    cookie_accept: "Accept All",
    tab_register: "REGISTER D4C ACCOUNT",
    tab_forgot: "RECOVER PASSWORD",
    modal_reg_user: "DESIRED USERNAME",
    modal_reg_email: "PERMANENT EMAIL ADDRESS",
    modal_reg_code: "6-DIGIT VERIFICATION CODE",
    modal_reg_pass: "ACCOUNT PASSWORD",
    modal_reg_retype: "RETYPE PASSWORD",
    age_gate_label: "I confirm I am at least 13 years old (or 16 in the European Union / UK).",
    btn_send_code: "SEND CODE",
    btn_complete_reg: "COMPLETE REGISTRATION",
    modal_rec_account: "REGISTERED EMAIL / USERNAME",
    modal_rec_code: "6-DIGIT RESET CODE",
    modal_rec_newpass: "NEW PASSWORD",
    btn_reset_pass: "RESET CREDENTIALS & RECOVER",
    steam_modal_headline: "AUTHENTICATING VIA STEAM COMMUNITY",
    steam_modal_desc: "Connecting to Valve Steam OpenID 2.0 service. Your Steam credentials and password are kept 100% private and never shared with D4C Studio.",
    btn_confirm_steam: "SIGN IN AS GHOST_SNIPER99",
    steam_timeout_hint: "Encountering network issues?",
    retry_connection: "Retry Connection",
    support_title: "SUPPORT",
    support_heading: "NEED HELP?",
    support_desc: "Our international player support team is ready to assist you across all server regions.",
    support_bug_text: "Browse guides, submit tickets, or upload client reproduction crash logs.",
    support_response_time: "Expected response time: within 24 hours (Monday – Sunday)",
    close_support: "CLOSE",
    footer_status: "Server Status",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_cookies: "Cookie Preferences",
    footer_gdpr: "Your Privacy Choices",
    footer_privacy_choices: "Your Privacy Choices",
    footer_platform_disclaimer: "Valve Corporation is the registered owner of Steam and the Steam logo. This portal complies with Steam Web API terms.",
    close_dispatch: "CLOSE DISPATCH",
    event_briefing_tag: "TACTICAL EVENT BRIEFING",
    event_modal_h3: "OPERATION ZERO HOUR: MISSION SPECS",
    event_modal_intro: "Deploy into Sector 07 with your fireteam. Extraction objectives reset every 12 hours. Earn double weapon proficiency and unlock exclusive Cyber Strike armory gear.",
    mission_1: "Extract 3 encrypted data drives from the reactor core. Reward: +250 D4C Credits.",
    mission_2: "Score 50 headshot eliminations with DMR weapons. Reward: Neon Recon Blueprint.",
    mission_3: "Collectively clear 1,000,000 sectors across international servers to unlock free weekend crates.",
    acknowledged: "ACKNOWLEDGE & RETURN",
    lang_fallback_notice: "Only available in English"
  },
  vi: {
    global_servers: "MÁY CHỦ TOÀN CẦU",
    server_online: "HOẠT ĐỘNG",
    cluster_health_title: "CỤM MÁY CHỦ TOÀN CẦU",
    view_telemetry: "Xem chi tiết đo lường máy chủ →",
    nav_events: "Sự kiện",
    nav_checkin: "Điểm danh nhận quà",
    nav_news: "Tin tức",
    nav_support: "Hỗ trợ",
    settings_title: "CÀI ĐẶT HỆ THỐNG",
    settings_sfx: "Âm thanh hiệu ứng (SFX)",
    user_lvl: "CẤP",
    btn_logout: "ĐĂNG XUẤT",
    badge_event: "SỰ KIỆN ĐANG CHẠY",
    announcement_text: 'Mùa 3: "Chiến dịch Giờ Số 0" đang diễn ra! Tăng 2x EXP trên toàn bộ máy chủ toàn cầu.',
    event_tag: "SỰ KIỆN CÓ HẠN",
    event_timer: "KẾT THÚC SAU: 3N 14G",
    event_title: "CHIẾN DỊCH GIỜ SỐ 0: ĐỘT KÍCH MẠNG",
    event_desc: "Đột kích Khu vực 07 trong chế độ chiến thuật mới. Nhân đôi kinh nghiệm vũ khí, nhận skin Neon Strike độc quyền và phần thưởng mốc cộng đồng.",
    btn_event_action: "XEM CHI TIẾT SỰ KIỆN & NHIỆM VỤ →",
    checkin_title: "ĐIỂM DANH HÀNG NGÀY // NHẬN THƯỞNG",
    resets_in: "LÀM MỚI SAU:",
    streak_teaser: "CHU KỲ 7 NGÀY",
    checkin_subtitle: "Đăng nhập mỗi ngày liên tục để nhận đạn dược, tiền tệ và bản thiết kế trang phục độc quyền trong game.",
    day_1: "NGÀY 1",
    day_2: "NGÀY 2",
    day_3: "NGÀY 3",
    day_4: "NGÀY 4",
    day_5: "NGÀY 5",
    day_6: "NGÀY 6",
    day_7: "NGÀY 7",
    badge_today: "HÔM NAY",
    reward_gold: "Vàng",
    reward_exp: "Tăng EXP",
    reward_ammo: "Hòm Đạn",
    reward_credits: "Credits",
    reward_armor: "Giáp Trận",
    reward_key: "Chìa Khóa",
    reward_skin: "Skin Viper",
    checkin_lock_hint: "Đăng nhập bằng Steam để nhận quà hôm nay: <strong>x250 D4C Credits</strong>!",
    streak_grace_note: "🛡️ Bảo vệ chuỗi: Thời gian ân hạn 24 giờ trên các múi giờ quốc tế. Bỏ lỡ 1 ngày chỉ lùi 1 bậc chuỗi.",
    news_title: "BẢN TIN & CẬP NHẬT GAME",
    filter_all: "TẤT CẢ",
    cat_update: "CẬP NHẬT",
    cat_event: "SỰ KIỆN",
    cat_maint: "BẢO TRÌ",
    badge_new: "MỚI",
    read_more: "Đọc tiếp →",
    news_1_title: "Bản vá 2.4.0: Cân bằng vũ khí & Giao thức chống gian lận V4",
    news_1_snippet: "Cải tiến độ giật cho súng DMR, nâng cấp tick rate máy chủ toàn cầu và tối ưu hóa thời gian tải game.",
    news_2_title: "Giải vô địch Cyber Strike Toàn Cầu: Vòng loại khu vực",
    news_2_snippet: "Đăng ký đội hình 5 đặc vụ tranh tài giải thưởng 25.000 USD quốc tế. Vòng loại diễn ra đồng thời tại Châu Mỹ, EMEA và APAC.",
    news_3_title: "Hoàn tất bảo trì & tối ưu định tuyến máy chủ toàn cầu",
    news_3_snippet: "Cập nhật dữ liệu hạ tầng hoàn tất tại các cụm Frankfurt, Virginia, Singapore và São Paulo.",
    auth_header_tag: "TRUNG TÂM TÀI KHOẢN // STEAM & D4C",
    status_ready: "CỔNG KẾT NỐI AN TOÀN",
    login_heading: "ĐĂNG NHẬP TÀI KHOẢN",
    login_subheading: "Đăng nhập để điểm danh nhận quà và xem cập nhật game",
    steam_subtext: "ĐĂNG NHẬP BẰNG",
    steam_maintext: "STEAM",
    steam_security_note: "Chuyển hướng qua Steam OpenID. Chúng tôi không bao giờ hỏi mật khẩu Steam của bạn.",
    d4c_accordion_btn: "HOẶC DÙNG TÀI KHOẢN D4C",
    d4c_accordion_hint: "D4C là tài khoản nhà phát hành tùy chọn dùng để đồng bộ đa nền tảng và khôi phục tài khoản. Chỉ dùng nếu đã liên kết.",
    ph_user: "Tên đăng nhập hoặc email",
    ph_pass: "Mật khẩu",
    ph_promo: "Nhập mã quà tặng hoặc code sự kiện...",
    remember_me: "Ghi nhớ đăng nhập",
    forgot_pass: "Quên mật khẩu?",
    btn_signin: "ĐĂNG NHẬP",
    no_account: "Chưa có tài khoản D4C?",
    register_now: "Đăng ký ngay",
    more_platforms: "SẮP MỞ RỘNG TỚI:",
    global_active: "CỤM MÁY CHỦ ĐANG HOẠT ĐỘNG",
    portal_ver: "CỔNG THÔNG TIN: V2.4.0",
    community_title: "CỘNG ĐỒNG & BỘ CÀI GAME",
    dl_client: "TẢI & CHƠI TRÊN STEAM",
    dl_sub: "Cửa hàng Steam (Tab mới) • Giao thức App",
    discord_community: "DISCORD BIỆT ĐỘI CHÍNH THỨC",
    discord_sub: "Hơn 50.000 Đặc Vụ Trực Tuyến",
    rank_verified: "ĐẶC VỤ ĐÃ XÁC MINH",
    steam_linked: "ĐÃ KẾT NỐI STEAM ✓",
    metric_steamid: "MÃ STEAM:",
    btn_copy: "CHÉP",
    metric_rank: "CẤP ĐỘ:",
    rank_value: "CẤP 42 (CHUYÊN GIA)",
    metric_streak: "CHUỖI ĐIỂM DANH:",
    active_checkin_title: "ĐIỂM DANH HÀNG NGÀY // NHẬN THƯỞNG",
    checkin_ready_text: "Phần thưởng Ngày 5 đã sẵn sàng! Điểm danh ngay để nhận quà vào hòm đồ trong game.",
    ready: "SẴN SÀNG",
    btn_claim: "ĐIỂM DANH NHẬN QUÀ (NGÀY 5)",
    milestones_title: "MỐC THƯỞNG TÍCH LŨY",
    milestones_sub: "Đạt các mốc điểm danh liên tiếp để mở khóa phần thưởng huyền thoại",
    history_title: "LỊCH SỬ NHẬN THƯỞNG GẦN ĐÂY",
    redeem_title: "ĐỔI MÃ QUÀ TẶNG (GIFT CODE)",
    redeem_desc: "Nhập mã quà tặng sự kiện hoặc code cộng đồng để nhận quà:",
    btn_redeem: "ĐỔI QUÀ",
    primary_auth_title: "XÁC THỰC CHÍNH",
    bindings_title: "TÀI KHOẢN LIÊN KẾT TÙY CHỌN",
    primary_login: "Định danh đăng nhập chính",
    connected: "ĐÃ KẾT NỐI",
    twitch_desc: "Xem stream nhận quà rơi",
    discord_desc: "Đồng bộ cấp bậc & vai trò biệt đội",
    btn_link: "LIÊN KẾT",
    cookie_title: "Tùy chọn Quyền Riêng Tư & Cookie",
    cookie_desc: "Chúng tôi sử dụng cookie thiết yếu để bảo đảm an toàn phiên đăng nhập. Cookie đo lường tùy chọn giúp tối ưu hóa độ trễ máy chủ toàn cầu.",
    cookie_essential: "Chỉ Cookie Thiết Yếu",
    cookie_accept: "Chấp Nhận Tất Cả",
    tab_register: "ĐĂNG KÝ TÀI KHOẢN D4C",
    tab_forgot: "KHÔI PHỤC MẬT KHẨU",
    modal_reg_user: "TÊN TÀI KHOẢN MONG MUỐN",
    modal_reg_email: "ĐỊA CHỈ EMAIL CHÍNH THỨC",
    modal_reg_code: "MÃ XÁC MINH 6 CHỮ SỐ",
    modal_reg_pass: "MẬT KHẨU TÀI KHOẢN",
    modal_reg_retype: "NHẬP LẠI MẬT KHẨU",
    age_gate_label: "Tôi xác nhận tôi đủ từ 13 tuổi trở lên (hoặc 16 tuổi tại Liên minh Châu Âu / Anh).",
    btn_send_code: "GỬI MÃ",
    btn_complete_reg: "HOÀN TẤT ĐĂNG KÝ",
    modal_rec_account: "EMAIL HOẶC TÊN TÀI KHOẢN ĐÃ ĐĂNG KÝ",
    modal_rec_code: "MÃ KHÔI PHỤC 6 CHỮ SỐ",
    modal_rec_newpass: "MẬT KHẨU MỚI",
    btn_reset_pass: "ĐẶT LẠI MẬT KHẨU",
    steam_modal_headline: "ĐANG XÁC THỰC QUA CỘNG ĐỒNG STEAM",
    steam_modal_desc: "Đang kết nối tới dịch vụ Valve Steam OpenID 2.0. Mật khẩu và thông tin đăng nhập Steam của bạn hoàn toàn bảo mật và không bao giờ chia sẻ với D4C Studio.",
    btn_confirm_steam: "ĐĂNG NHẬP VỚI TÊN GHOST_SNIPER99",
    steam_timeout_hint: "Gặp sự cố đường truyền mạng?",
    retry_connection: "Thử lại kết nối",
    support_title: "HỖ TRỢ",
    support_heading: "BẠN CẦN TRỢ GIÚP?",
    support_desc: "Đội ngũ chăm sóc người chơi quốc tế luôn sẵn sàng hỗ trợ bạn trên mọi khu vực máy chủ.",
    support_bug_text: "Duyệt hướng dẫn, gửi phiếu hỗ trợ, hoặc tải lên nhật ký sự cố.",
    support_response_time: "Thời gian phản hồi dự kiến: trong vòng 24 giờ (Thứ 2 – Chủ Nhật)",
    close_support: "ĐÓNG",
    footer_status: "Trạng thái máy chủ",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản dịch vụ",
    footer_cookies: "Tùy chọn Cookie",
    footer_gdpr: "Lựa chọn quyền riêng tư",
    footer_privacy_choices: "Lựa chọn quyền riêng tư",
    footer_platform_disclaimer: "Valve Corporation là chủ sở hữu nhãn hiệu Steam và logo Steam. Cổng thông tin này tuân thủ các điều khoản Steam Web API.",
    close_dispatch: "ĐÓNG BẢN TIN",
    event_briefing_tag: "HỒ SƠ TÁC CHIẾN CHIẾN DỊCH",
    event_modal_h3: "CHIẾN DỊCH GIỜ SỐ 0: THÔNG SỐ NHIỆM VỤ",
    event_modal_intro: "Triển khai tới Khu vực 07 cùng hỏa lực biệt đội của bạn. Mục tiêu trích xuất dữ liệu làm mới mỗi 12 giờ. Nhận x2 độ thuần thục vũ khí và mở khóa trang bị kho vũ khí Cyber Strike.",
    mission_1: "Trích xuất 3 ổ dữ liệu mã hóa từ lõi lò phản ứng. Thưởng: +250 D4C Credits.",
    mission_2: "Đạt 50 hạ gục bằng phát bắn vào đầu với vũ khí DMR. Thưởng: Bản vẽ Neon Recon.",
    mission_3: "Cộng đồng quốc tế giải cứu 1.000.000 khu vực để mở hòm thưởng miễn phí cuối tuần.",
    acknowledged: "ĐÃ RÕ & QUAY LẠI",
    lang_fallback_notice: "Chỉ có bản tiếng Anh"
  },
  de: {
    global_servers: "GLOBALE SERVER",
    server_online: "ONLINE",
    cluster_health_title: "GLOBALE SERVER-CLUSTER",
    view_telemetry: "Vollständige Server-Telemetrie anzeigen →",
    nav_events: "Events",
    nav_checkin: "Tägliche Belohnungen",
    nav_news: "Neuigkeiten",
    nav_support: "Support",
    settings_title: "SYSTEMEINSTELLUNGEN",
    settings_sfx: "Audio-Feedback (SFX)",
    user_lvl: "STF",
    btn_logout: "ABMELDEN",
    badge_event: "EVENT LIVE",
    announcement_text: 'Saison 3: "Operation Zero Hour" ist aktiv! 2x EXP-Bonus auf allen weltweiten Servern aktiviert.',
    event_tag: "ZEITLICH BEGRENZTES EVENT",
    event_timer: "ENDET IN: 3T 14STD",
    event_title: "OPERATION ZERO HOUR: CYBER-RAUBZUG",
    event_desc: "Infiltrieren Sie Sektor 07 im neuen taktischen Extraktionsmodus. Doppel-Waffen-EXP, exklusive Neon-Recon-Skins und Community-Meilensteine.",
    btn_event_action: "EVENT-MISSIONEN & DETAILS ANSEHEN →",
    checkin_title: "TÄGLICHE BELOHNUNGEN // CHECK-IN",
    resets_in: "ZURÜCKSETZUNG IN:",
    streak_teaser: "7-TAGE-ROTATION",
    checkin_subtitle: "Melden Sie sich täglich an, um Munition, Währung und exklusive kosmetische Baupläne im Spiel zu sichern.",
    day_1: "TAG 1",
    day_2: "TAG 2",
    day_3: "TAG 3",
    day_4: "TAG 4",
    day_5: "TAG 5",
    day_6: "TAG 6",
    day_7: "TAG 7",
    badge_today: "HEUTE",
    reward_gold: "Gold",
    reward_exp: "EXP-Schub",
    reward_ammo: "Munitionskiste",
    reward_credits: "Credits",
    reward_armor: "Rüstungspaket",
    reward_key: "Cyber-Schlüssel",
    reward_skin: "Viper-Skin",
    checkin_lock_hint: "Über Steam anmelden, um die heutige Belohnung einzufordern: <strong>x250 D4C-Credits</strong>!",
    streak_grace_note: "🛡️ Streak-Schutz: 24-stündige Nachfrist über globale Zeitzonen hinweg. 1 verpasster Tag verringert den Streak um 1 Stufe.",
    news_title: "NEUIGKEITEN & SPIEL-UPDATES",
    filter_all: "ALLE",
    cat_update: "UPDATE",
    cat_event: "EVENT",
    cat_maint: "WARTUNG",
    badge_new: "NEU",
    read_more: "Bericht lesen →",
    news_1_title: "Patch 2.4.0: Waffen-Balancing & Anti-Cheat V4",
    news_1_snippet: "Überarbeitete Rückstoßmuster für DMR-Gewehre, verbesserte Server-Tickrate und optimierte Ladezeiten.",
    news_2_title: "Cyber Strike Global Championship: Offene regionale Qualifikation",
    news_2_snippet: "Registrieren Sie Ihr 5-Spieler-Team für das internationale Preisgeld von 25.000 USD. Qualifikationsspiele in Amerika, EMEA und APAC.",
    news_3_title: "Globale Serverwartung & Routing-Optimierung abgeschlossen",
    news_3_snippet: "Infrastruktur-Datenbankindizierung in Frankfurt, Virginia, Singapur und São Paulo erfolgreich abgeschlossen.",
    auth_header_tag: "KONTO-ZENTRUM // STEAM & D4C",
    status_ready: "SICHERES GATEWAY",
    login_heading: "KONTO-ANMELDUNG",
    login_subheading: "Anmelden, um tägliche Belohnungen und Updates zu erhalten",
    steam_subtext: "ANMELDEN ÜBER",
    steam_maintext: "STEAM",
    steam_security_note: "Wir leiten zu Steam OpenID weiter. Wir fragen niemals nach Ihrem Steam-Passwort.",
    d4c_accordion_btn: "ODER D4C-KONTO VERWENDEN",
    d4c_accordion_hint: "D4C ist ein optionales Publisher-Konto für plattformübergreifendes Spielen. Nur nutzen, falls bereits verknüpft.",
    ph_user: "Benutzername oder E-Mail",
    ph_pass: "Passwort",
    ph_promo: "Gutschein- oder Aktionscode eingeben...",
    remember_me: "Anmeldung merken",
    forgot_pass: "Passwort vergessen?",
    btn_signin: "ANMELDEN",
    no_account: "Noch kein D4C-Konto?",
    register_now: "Jetzt registrieren",
    more_platforms: "DEMNÄCHST AUCH FÜR:",
    global_active: "GLOBALE CLUSTER AKTIV",
    portal_ver: "PORTAL: V2.4.0",
    community_title: "COMMUNITY & CLIENT",
    dl_client: "SPIEL-CLIENT HERUNTERLADEN",
    dl_sub: "Über Steam PC-Plattform",
    discord_community: "OFFIZIELLER SQUAD-DISCORD",
    discord_sub: "Über 50.000 aktive Spieler",
    rank_verified: "VERIFIZIERTER SPIELER",
    steam_linked: "STEAM VERBUNDEN ✓",
    metric_steamid: "STEAM-ID:",
    btn_copy: "KOPIEREN",
    metric_rank: "KAMPFRANG:",
    rank_value: "STUFE 42 (SPEZIALIST)",
    metric_streak: "AKTUELLER STREAK:",
    active_checkin_title: "TÄGLICHE BELOHNUNGEN // EINFORDERN",
    checkin_ready_text: "Die Belohnung für Tag 5 ist verfügbar! Holen Sie sie direkt in Ihren In-Game-Tresor.",
    ready: "BEREIT",
    btn_claim: "TAGESBELOHNUNG EINFORDERN (TAG 5)",
    milestones_title: "SERIEN-MEILENSTEINE",
    milestones_sub: "Erreichen Sie Check-in-Meilensteine für legendäre Belohnungen",
    history_title: "LETZTE BELOHNUNGSAKTIVITÄT",
    redeem_title: "GUTSCHEINCODE EINLÖSEN",
    redeem_desc: "Community- oder Event-Code eingeben, um Belohnungen freizuschalten:",
    btn_redeem: "EINLÖSEN",
    primary_auth_title: "PRIMÄRE AUTHENTIFIZIERUNG",
    bindings_title: "OPTIONALE PLATTFORM-VERKNÜPFUNGEN",
    primary_login: "Primäre Anmelde-ID",
    connected: "VERBUNDEN",
    twitch_desc: "Streams ansehen für Beute-Drops",
    discord_desc: "Squad-Rang & Rolle synchronisieren",
    btn_link: "VERKNÜPFEN",
    cookie_title: "Datenschutz- & Cookie-Einstellungen",
    cookie_desc: "Wir verwenden essenzielle Cookies für Authentifizierung und Sitzungssicherheit. Optionale Telemetrie-Cookies optimieren Latenzen.",
    cookie_essential: "Nur essenzielle",
    cookie_accept: "Alle akzeptieren",
    tab_register: "D4C-KONTO ERSTELLEN",
    tab_forgot: "PASSWORT ZURÜCKSETZEN",
    modal_reg_user: "GEWÜNSCHTER BENUTZERNAME",
    modal_reg_email: "PERMANENTE E-MAIL-ADRESSE",
    modal_reg_code: "6-STELLIGER BESTÄTIGUNGSCODE",
    modal_reg_pass: "KONTO-PASSWORT",
    modal_reg_retype: "PASSWORT WIEDERHOLEN",
    age_gate_label: "Ich bestätige, dass ich mindestens 16 Jahre alt bin (EU / UK) bzw. 13 Jahre weltweit.",
    btn_send_code: "CODE SENDEN",
    btn_complete_reg: "REGISTRIERUNG ABSCHLIESSEN",
    modal_rec_account: "REGISTRIERTE E-MAIL / BENUTZERNAME",
    modal_rec_code: "6-STELLIGER RÜCKSETZCODE",
    modal_rec_newpass: "NEUES PASSWORT",
    btn_reset_pass: "PASSWORT ZURÜCKSETZEN",
    steam_modal_headline: "AUTHENTIFIZIERUNG ÜBER STEAM COMMUNITY",
    steam_modal_desc: "Verbindung mit Valve Steam OpenID 2.0. Ihre Zugangsdaten bleiben 100% geschützt und werden nicht geteilt.",
    btn_confirm_steam: "ALS GHOST_SNIPER99 ANMELDEN",
    steam_timeout_hint: "Verbindungsprobleme festgestellt?",
    retry_connection: "Verbindung wiederholen",
    support_title: "SUPPORT",
    support_heading: "BRAUCHEN SIE HILFE?",
    support_desc: "Unser technischer Kundensupport steht Ihnen weltweit rund um die Uhr zur Verfügung.",
    support_bug_text: "Fehlerberichte direkt über das Menü im Spiel oder das Support-Portal einreichen.",
    support_response_time: "Erwartete Antwortzeit: innerhalb von 24 Stunden (Mo – So)",
    close_support: "SCHLIESSEN",
    footer_status: "Server-Status",
    footer_privacy: "Datenschutzerklärung",
    footer_terms: "Nutzungsbedingungen",
    footer_cookies: "Cookie-Einstellungen",
    footer_gdpr: "Ihre Datenschutz-Einstellungen",
    footer_privacy_choices: "Ihre Datenschutz-Einstellungen",
    footer_platform_disclaimer: "Valve Corporation ist Inhaber von Steam und dem Steam-Logo. Dieses Portal erfüllt alle Steam Web API Richtlinien.",
    close_dispatch: "BERICHT SCHLIESSEN",
    event_briefing_tag: "TAKTISCHES EVENT-BRIEFING",
    event_modal_h3: "OPERATION ZERO HOUR: MISSIONSDATEN",
    event_modal_intro: "Rücken Sie mit Ihrem Team in Sektor 07 ein. Extraktionsziele erneuern sich alle 12 Stunden. Verdienen Sie doppelte Waffen-EXP.",
    mission_1: "Extrahieren Sie 3 verschlüsselte Datenlaufwerke aus dem Reaktorkern. Belohnung: +250 D4C-Credits.",
    mission_2: "Erzielen Sie 50 Kopfschuss-Eliminierungen mit DMR-Waffen. Belohnung: Neon-Recon-Bauplan.",
    mission_3: "Schließen Sie gemeinsam 1.000.000 Sektoren auf globalen Servern ab, um Belohnungskisten freizuschalten.",
    acknowledged: "VERSTANDEN & ZURÜCK",
    lang_fallback_notice: "Nur auf Englisch verfügbar"
  },
  es: {
    global_servers: "SERVIDORES GLOBALES",
    server_online: "EN LÍNEA",
    cluster_health_title: "CLÚSTERES GLOBALES DE SERVIDORES",
    view_telemetry: "Ver telemetría completa de servidores →",
    nav_events: "Eventos",
    nav_checkin: "Recompensas Diarias",
    nav_news: "Noticias",
    nav_support: "Soporte",
    settings_title: "CONFIGURACIÓN DEL SISTEMA",
    settings_sfx: "Efectos de sonido (SFX)",
    user_lvl: "NVL",
    btn_logout: "CERRAR SESIÓN",
    badge_event: "EVENTO ACTIVO",
    announcement_text: '¡Temporada 3: "Operation Zero Hour" está activa! Doble EXP habilitado en todos los servidores globales.',
    event_tag: "EVENTO POR TIEMPO LIMITADO",
    event_timer: "TERMINA EN: 3D 14H",
    event_title: "OPERATION ZERO HOUR: ASALTO CIBERNÉTICO",
    event_desc: "Infiltra el Sector 07 en la nueva incursión táctica de extracción. Doble EXP de armas, aspectos Neon Recon exclusivos y recompensas comunitarias.",
    btn_event_action: "VER MISIONES Y DETALLES DEL EVENTO →",
    checkin_title: "RECOMPENSAS DIARIAS // REGISTRO",
    resets_in: "REINICIO EN:",
    streak_teaser: "ROTACIÓN DE 7 DÍAS",
    checkin_subtitle: "Inicia sesión consecutivamente para reclamar munición, monedas del juego y planos estéticos exclusivos.",
    day_1: "DÍA 1",
    day_2: "DÍA 2",
    day_3: "DÍA 3",
    day_4: "DÍA 4",
    day_5: "DÍA 5",
    day_6: "DÍA 6",
    day_7: "DÍA 7",
    badge_today: "HOY",
    reward_gold: "Oro",
    reward_exp: "Potenciador EXP",
    reward_ammo: "Caja de Munición",
    reward_credits: "Créditos",
    reward_armor: "Paquete de Armadura",
    reward_key: "Llave Cibernética",
    reward_skin: "Aspecto Viper",
    checkin_lock_hint: "¡Inicia sesión con Steam para reclamar la recompensa de hoy: <strong>x250 Créditos D4C</strong>!",
    streak_grace_note: "🛡️ Protección de Racha: Período de gracia de 24 horas en zonas horarias globales. Perder 1 día reduce la racha en 1 nivel.",
    news_title: "NOTICIAS Y ACTUALIZACIONES",
    filter_all: "TODO",
    cat_update: "ACTUALIZACIÓN",
    cat_event: "EVENTO",
    cat_maint: "MANTENIMIENTO",
    badge_new: "NUEVO",
    read_more: "Leer despacho →",
    news_1_title: "Parche 2.4.0: Balance de Armas y Protocolo Antitrampas V4",
    news_1_snippet: "Patrones de retroceso mejorados para rifles DMR, mayor tasa de refresco en servidores globales y tiempos de carga reducidos.",
    news_2_title: "Campeonato Mundial Cyber Strike: Clasificatorias Regionales",
    news_2_snippet: "Registra a tu escuadrón de 5 agentes para el premio de $25,000 USD internacional. Clasificatorias abiertas en América, EMEA y APAC.",
    news_3_title: "Mantenimiento y Optimización de Enrutamiento Global Concluido",
    news_3_snippet: "Indexación de bases de datos completada exitosamente en los nodos de Frankfurt, Virginia, Singapur y São Paulo.",
    auth_header_tag: "CENTRO DE CUENTAS // STEAM Y D4C",
    status_ready: "PASARELA SEGURA",
    login_heading: "INICIAR SESIÓN",
    login_subheading: "Inicia sesión para reclamar recompensas diarias y novedades",
    steam_subtext: "INICIAR SESIÓN CON",
    steam_maintext: "STEAM",
    steam_security_note: "Redirigimos a Steam OpenID. Nunca te pediremos tu contraseña de Steam.",
    d4c_accordion_btn: "O USAR CUENTA D4C",
    d4c_accordion_hint: "D4C es una cuenta opcional de la editora para juego multiplataforma y recuperación. Úsala solo si ya está vinculada.",
    ph_user: "Usuario o correo electrónico",
    ph_pass: "Contraseña",
    ph_promo: "Ingresa código de regalo o evento...",
    remember_me: "Recordar sesión",
    forgot_pass: "¿Olvidaste tu contraseña?",
    btn_signin: "INICIAR SESIÓN",
    no_account: "¿No tienes cuenta D4C?",
    register_now: "Regístrate ahora",
    more_platforms: "PRÓXIMAMENTE EN:",
    global_active: "CLÚSTERES GLOBALES ACTIVOS",
    portal_ver: "PORTAL: V2.4.0",
    community_title: "COMUNIDAD Y CLIENTE",
    dl_client: "CONSEGUIR JUEGO EN STEAM",
    dl_sub: "Steam Store (Nueva pestaña) • Protocolo de App",
    discord_community: "DISCORD OFICIAL DEL ESCUADRÓN",
    discord_sub: "Más de 50,000 agentes activos",
    rank_verified: "AGENTE VERIFICADO",
    steam_linked: "STEAM CONECTADO ✓",
    metric_steamid: "ID DE STEAM:",
    btn_copy: "COPIAR",
    metric_rank: "RANGO DE COMBATE:",
    rank_value: "NIVEL 42 (ESPECIALISTA)",
    metric_streak: "RACHA ACTUAL:",
    active_checkin_title: "RECOMPENSAS DIARIAS // RECLAMAR",
    checkin_ready_text: "¡La recompensa del Día 5 está disponible! Reclámala directamente en tu bóveda del juego.",
    ready: "LISTO",
    btn_claim: "RECLAMAR RECOMPENSA DE HOY (DÍA 5)",
    milestones_title: "HITOS DE RACHA",
    milestones_sub: "Alcanza hitos de racha para recompensas legendarias",
    history_title: "ACTIVIDAD DE RECOMPENSAS RECIENTE",
    redeem_title: "CANJEAR CÓDIGO DE REGALO",
    redeem_desc: "Ingresa el código del evento o comunidad para canjear recompensas:",
    btn_redeem: "CANJEAR",
    primary_auth_title: "AUTENTICACIÓN PRINCIPAL",
    bindings_title: "VINCULACIONES OPCIONALES",
    primary_login: "Identificador de autenticación principal",
    connected: "CONECTADO",
    twitch_desc: "Mira transmisiones para ganar recompensas",
    discord_desc: "Sincroniza rol y rango de escuadrón",
    btn_link: "VINCULAR",
    cookie_title: "Preferencias de Privacidad y Cookies",
    cookie_desc: "Utilizamos cookies esenciales para la seguridad de la sesión. Cookies opcionales de telemetría ayudan a optimizar la latencia global.",
    cookie_essential: "Solo Esenciales",
    cookie_accept: "Aceptar Todas",
    tab_register: "REGISTRAR CUENTA D4C",
    tab_forgot: "RECUPERAR CONTRASEÑA",
    modal_reg_user: "NOMBRE DE USUARIO DESEADO",
    modal_reg_email: "CORREO ELECTRÓNICO PERMANENTE",
    modal_reg_code: "CÓDIGO DE VERIFICACIÓN DE 6 DÍGITOS",
    modal_reg_pass: "CONTRASEÑA DE LA CUENTA",
    modal_reg_retype: "REPETIR CONTRASEÑA",
    age_gate_label: "Confirmo que tengo al menos 13 años (o 16 en la Unión Europea / Reino Unido).",
    btn_send_code: "ENVIAR CÓDIGO",
    btn_complete_reg: "COMPLETAR REGISTRO",
    modal_rec_account: "CORREO O USUARIO REGISTRADO",
    modal_rec_code: "CÓDIGO DE 6 DÍGITOS",
    modal_rec_newpass: "NUEVA CONTRASEÑA",
    btn_reset_pass: "RESTABLECER CONTRASEÑA",
    steam_modal_headline: "AUTENTICACIÓN MEDIANTE STEAM COMMUNITY",
    steam_modal_desc: "Conectando con el servicio Valve Steam OpenID 2.0. Tus credenciales permanecen 100% privadas y seguras.",
    btn_confirm_steam: "INICIAR SESIÓN COMO GHOST_SNIPER99",
    steam_timeout_hint: "¿Problemas de conexión a la red?",
    retry_connection: "Reintentar conexión",
    support_title: "SOPORTE",
    support_heading: "¿NECESITAS AYUDA?",
    support_desc: "Nuestro equipo de soporte técnico opera las 24 horas del día en todos los servidores globales.",
    support_bug_text: "Envía informes de errores desde el menú del juego o a través del portal de soporte.",
    support_response_time: "Tiempo de respuesta estimado: dentro de las 24 horas (Lunes – Domingo)",
    close_support: "CERRAR",
    footer_status: "Estado de Servidores",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos del Servicio",
    footer_cookies: "Preferencias de Cookies",
    footer_gdpr: "Tus Opciones de Privacidad",
    footer_privacy_choices: "Tus Opciones de Privacidad",
    footer_platform_disclaimer: "Valve Corporation es la propietaria registrada de Steam y el logotipo de Steam. Este portal cumple con los términos de la API de Steam.",
    close_dispatch: "CERRAR DESPACHO",
    event_briefing_tag: "INFORME TÁCTICO DEL EVENTO",
    event_modal_h3: "OPERATION ZERO HOUR: DETALLES DE LA MISIÓN",
    event_modal_intro: "Despliégate en el Sector 07 con tu escuadrón. Los objetivos de extracción se reinician cada 12 horas. Obtén doble EXP de armas.",
    mission_1: "Extrae 3 discos de datos encriptados del núcleo del reactor. Recompensa: +250 Créditos D4C.",
    mission_2: "Consigue 50 bajas con disparos a la cabeza usando rifles DMR. Recompensa: Plano Neon Recon.",
    mission_3: "Despeja colectivamente 1,000,000 de sectores en servidores globales para desbloquear cajas de fin de semana.",
    acknowledged: "ENTENDIDO Y REGRESAR",
    lang_fallback_notice: "Solo disponible en inglés"
  },
  ja: {
    global_servers: "グローバルサーバー",
    server_online: "オンライン",
    cluster_health_title: "世界各地域のサーバー稼働状況",
    view_telemetry: "完全なテレメトリを表示 →",
    nav_events: "イベント",
    nav_checkin: "デイリー報酬",
    nav_news: "お知らせ",
    nav_support: "サポート",
    settings_title: "システム設定",
    settings_sfx: "効果音 (SFX)",
    user_lvl: "Lv.",
    btn_logout: "ログアウト",
    badge_event: "イベント開催中",
    announcement_text: 'シーズン3「オペレーション・ゼロアワー」開催中！全グローバルサーバーで武器経験値2倍ボーナス適用中。',
    event_tag: "期間限定イベント",
    event_timer: "終了まで: 3日 14時間",
    event_title: "オペレーション・ゼロアワー：サイバー強襲",
    event_desc: "新戦術レイドでセクター07に潜入せよ。武器経験値2倍、限定ネオンレコンスキン、コミュニティ達成報酬を獲得可能。",
    btn_event_action: "イベント任務と詳細を確認 →",
    checkin_title: "デイリー報酬 // 補給チェックイン",
    resets_in: "リセットまで:",
    streak_teaser: "7日間サイクル",
    checkin_subtitle: "毎日連続でログインして、弾薬、ゲーム内通貨、限定コスメティック設計図を獲得しましょう。",
    day_1: "1日目",
    day_2: "2日目",
    day_3: "3日目",
    day_4: "4日目",
    day_5: "5日目",
    day_6: "6日目",
    day_7: "7日目",
    badge_today: "本日",
    reward_gold: "ゴールド",
    reward_exp: "EXPブースト",
    reward_ammo: "弾薬クレート",
    reward_credits: "クレジット",
    reward_armor: "防具パック",
    reward_key: "サイバーキー",
    reward_skin: "バイパースキン",
    checkin_lock_hint: "Steamでサインインして本日の報酬を受け取る: <strong>250 D4Cクレジット</strong>！",
    streak_grace_note: "🛡️ ストリーク保護: 各タイムゾーンに対応する24時間の猶予期間があります。1日逃しても1ランク下がるのみです。",
    news_title: "お知らせ ＆ アップデート",
    filter_all: "すべて",
    cat_update: "アップデート",
    cat_event: "イベント",
    cat_maint: "メンテナンス",
    badge_new: "NEW",
    read_more: "詳細を読む →",
    news_1_title: "パッチ2.4.0: 武器バランス調整 ＆ アンチチートV4",
    news_1_snippet: "DMRライフルの反動パターンを刷新、グローバルネットワークの通信頻度を改善し、ロード時間を短縮しました。",
    news_2_title: "Cyber Strike 世界選手権：地域予選エントリー開始",
    news_2_snippet: "賞金総額25,000米ドルの国際大会に5人制部隊で参戦しよう。南北アメリカ、EMEA、APAC地域で予選開幕。",
    news_3_title: "世界サーバーインフラの最適化メンテナンス完了",
    news_3_snippet: "フランクフルト、バージニア、シンガポール、サンパウロの全拠点でデータベース再構築が正常に完了しました。",
    auth_header_tag: "アカウントセンター // STEAM ＆ D4C",
    status_ready: "安全な接続ゲートウェイ",
    login_heading: "アカウントサインイン",
    login_subheading: "サインインして毎日の報酬を受け取り、最新情報をチェック",
    steam_subtext: "STEAMでサインイン",
    steam_maintext: "STEAM",
    steam_security_note: "Valve公式のSteam OpenID経由で接続します。Steamのパスワードを要求することは一切ありません。",
    d4c_accordion_btn: "またはD4Cアカウントを使用",
    d4c_accordion_hint: "D4Cはクロスプレイおよび直接復旧用のパブリッシャーアカウントです（連携済みの場合のみ使用）。",
    ph_user: "ユーザー名またはメールアドレス",
    ph_pass: "パスワード",
    ph_promo: "ギフトコードまたはプロモコードを入力...",
    remember_me: "ログイン状態を保持",
    forgot_pass: "パスワードをお忘れですか？",
    btn_signin: "サインイン",
    no_account: "D4Cアカウントをお持ちでないですか？",
    register_now: "新規登録",
    more_platforms: "対応予定プラットフォーム:",
    global_active: "グローバル全クラスター稼働中",
    portal_ver: "ポータル: V2.4.0",
    community_title: "コミュニティ ＆ ゲームクライアント",
    dl_client: "STEAMでゲームを入手",
    dl_sub: "Steamストア（別タブ）• アプリ起動",
    discord_community: "公式部隊DISCORD",
    discord_sub: "50,000人以上のアクティブ隊員",
    rank_verified: "認証済み隊員",
    steam_linked: "STEAM連携済み ✓",
    metric_steamid: "STEAM ID:",
    btn_copy: "コピー",
    metric_rank: "戦闘ランク:",
    rank_value: "レベル42 (特殊隊員)",
    metric_streak: "現在の連続日数:",
    active_checkin_title: "デイリー報酬 // 受け取り",
    checkin_ready_text: "5日目の報酬が受け取り可能です！補給物資をゲーム内保管庫に即時受け取りましょう。",
    ready: "受取可能",
    btn_claim: "本日の報酬を受け取る (5日目)",
    milestones_title: "連続チェックイン目標",
    milestones_sub: "連続ログインで限定ドロップを獲得",
    history_title: "最近の報酬履歴",
    redeem_title: "ギフトコードを引き換える",
    redeem_desc: "コミュニティやイベントで配布されたコードを入力して特典を受け取りましょう:",
    btn_redeem: "引き換える",
    primary_auth_title: "メイン認証",
    bindings_title: "オプションの外部サービス連携",
    primary_login: "主たる認証ID",
    connected: "連携済み",
    twitch_desc: "配信を視聴して限定ドロップを獲得",
    discord_desc: "部隊ランクとロールを自動同期",
    btn_link: "連携する",
    cookie_title: "プライバシーとクッキーの設定",
    cookie_desc: "セッションの安全性を維持するために必須のクッキーを使用しています。任意の測定クッキーは通信速度の改善に役立てられます。",
    cookie_essential: "必須クッキーのみ",
    cookie_accept: "すべて同意する",
    tab_register: "D4Cアカウント登録",
    tab_forgot: "パスワード再設定",
    modal_reg_user: "希望のユーザー名",
    modal_reg_email: "連絡用メールアドレス",
    modal_reg_code: "6桁の確認コード",
    modal_reg_pass: "アカウントパスワード",
    modal_reg_retype: "パスワード再入力",
    age_gate_label: "13歳以上（EUおよび英国においては16歳以上）であることを確認します。",
    btn_send_code: "コードを送信",
    btn_complete_reg: "登録を完了する",
    modal_rec_account: "登録済みのメールまたはユーザー名",
    modal_rec_code: "6桁のリセットコード",
    modal_rec_newpass: "新しいパスワード",
    btn_reset_pass: "パスワードをリセット",
    steam_modal_headline: "STEAMコミュニティ認証",
    steam_modal_desc: "ValveのSteam OpenID 2.0サービスに接続しています。Steamの資格情報は安全に保護されます。",
    btn_confirm_steam: "GHOST_SNIPER99としてサインイン",
    steam_timeout_hint: "接続でお困りですか？",
    retry_connection: "再試行する",
    support_title: "サポート",
    support_heading: "お困りですか？",
    support_desc: "国際サポートチームが24時間体制で全地域のプレイヤーをサポートしています。",
    support_bug_text: "ゲーム内メニューまたはポータルから不具合報告を送信してください。",
    support_response_time: "返答目安: 24時間以内（年中無休）",
    close_support: "閉じる",
    footer_status: "サーバー稼働状況",
    footer_privacy: "プライバシーポリシー",
    footer_terms: "利用規約",
    footer_cookies: "クッキー設定",
    footer_gdpr: "プライバシーの選択",
    footer_privacy_choices: "プライバシーの選択",
    footer_platform_disclaimer: "Valve CorporationはSteamおよびSteamロゴの登録商標所有者です。当ポータルはSteam Web API利用規約に準拠しています。",
    close_dispatch: "閉じる",
    event_briefing_tag: "作戦指令書",
    event_modal_h3: "オペレーション・ゼロアワー：作戦仕様",
    event_modal_intro: "部隊と共にセクター07へ急行せよ。データ回収目標は12時間ごとに更新されます。武器熟練度2倍を獲得可能。",
    mission_1: "原子炉炉心から暗号化データドライブを3個回収せよ。報酬: +250 D4Cクレジット。",
    mission_2: "DMR武器でヘッドショット50回を達成せよ。報酬: ネオンレコン設計図。",
    mission_3: "全サーバーのプレイヤーで協力して1,000,000セクターを制圧せよ。",
    acknowledged: "了解して戻る",
    lang_fallback_notice: "英語版のみ"
  },
  ar: {
    global_servers: "الخوادم العالمية",
    server_online: "متصل",
    cluster_health_title: "حالة مجموعات الخوادم العالمية",
    view_telemetry: "عرض قياسات الخوادم بالكامل ←",
    nav_events: "الفعاليات",
    nav_checkin: "المكافآت اليومية",
    nav_news: "الأخبار",
    nav_support: "الدعم",
    settings_title: "إعدادات النظام",
    settings_sfx: "المؤثرات الصوتية",
    user_lvl: "مستوى",
    btn_logout: "تسجيل الخروج",
    badge_event: "فعالية نشطة",
    announcement_text: 'الموسم 3: "عملية ساعة الصفر" نشط الآن! مضاعفة 2x خبرة مفعلة على جميع الخوادم العالمية.',
    event_tag: "فعالية محدودة المدة",
    event_timer: "ينتهي خلال: 3 أيام 14 ساعة",
    event_title: "عملية ساعة الصفر: السطو السيبراني",
    event_desc: "تسلل إلى القطاع 07 في غارة الاستخراج التكتيكية الجديدة. مضاعفة خبرة الأسلحة، ومظاهر حصرية، ومكافآت مجتمعية خاصة.",
    btn_event_action: "عرض مهام وتفاصيل الفعالية ←",
    checkin_title: "المكافآت اليومية // تسجيل الدخول",
    resets_in: "إعادة الضبط خلال:",
    streak_teaser: "دورة 7 أيام",
    checkin_subtitle: "سجل الدخول يومياً للحصول على ذخيرة داخل اللعبة، وعملات، ومخططات تجميلية حصرية.",
    day_1: "اليوم 1",
    day_2: "اليوم 2",
    day_3: "اليوم 3",
    day_4: "اليوم 4",
    day_5: "اليوم 5",
    day_6: "اليوم 6",
    day_7: "اليوم 7",
    badge_today: "اليوم",
    reward_gold: "ذهب",
    reward_exp: "مضاعف خبرة",
    reward_ammo: "صندوق ذخيرة",
    reward_credits: "رصيد",
    reward_armor: "حزمة دروع",
    reward_key: "مفتاح سيبراني",
    reward_skin: "مظهر فايبر",
    checkin_lock_hint: "سجل الدخول عبر Steam لاستلام مكافأة اليوم: <strong>x250 رصيد D4C</strong>!",
    streak_grace_note: "🛡️ حماية التتابع: نافذة سماح لمدة 24 ساعة عبر المناطق الزمنية الدولية. يوم ضائع يخفض مستوى التتابع بدرجة واحدة.",
    news_title: "الأخبار وتحديثات اللعبة",
    filter_all: "الكل",
    cat_update: "تحديث",
    cat_event: "فعالية",
    cat_maint: "صيانة",
    badge_new: "جديد",
    news_1_title: "التحديث 2.4.0: موازنة الأسلحة وبروتوكول مكافحة الغش V4",
    news_1_snippet: "تحسين ارتداد بنادق DMR، وتحسين معدل استجابة الشبكة العالمية، وتقليل أوقات تحميل اللعبة.",
    news_2_title: "بطولة Cyber Strike العالمية: التصفيات الإقليمية المفتوحة",
    news_2_snippet: "سجل فريقك المكون من 5 لاعبين للتنافس على جوائز بقيمة 25,000 دولار أمريكي.",
    news_3_title: "اكتمال صيانة الخوادم العالمية وتحسين مسارات الاتصال",
    news_3_snippet: "تم إكمال فهرسة قواعد البيانات بنجاح عبر خوادم فرانكفورت، وفيرجينيا، وسنغافورة، وساو باولو.",
    read_more: "قراءة التفاصيل ←",
    auth_header_tag: "مركز الحساب // STEAM & D4C",
    status_ready: "بوابة آمنة",
    login_heading: "تسجيل الدخول",
    login_subheading: "سجل الدخول للمطالبة بالمكافآت اليومية ومتابعة التحديثات",
    steam_subtext: "تسجيل الدخول عبر",
    steam_maintext: "STEAM",
    steam_security_note: "نحن نستخدم خدمة Steam OpenID الرسمية. لن نطلب أبداً كلمة مرور حساب Steam الخاص بك.",
    d4c_accordion_btn: "أو استخدم حساب D4C",
    d4c_accordion_hint: "حساب D4C اختياري ومخصص للعب عبر المنصات والدعم المباشر. استخدمه فقط إذا كان مرتبطاً مسبقاً.",
    ph_user: "اسم المستخدم أو البريد",
    ph_pass: "كلمة المرور",
    ph_promo: "أدخل رمز الهدية أو الرمز الترويجي...",
    remember_me: "تذكر تسجيل الدخول",
    forgot_pass: "نسيت كلمة المرور؟",
    btn_signin: "تسجيل الدخول",
    no_account: "ليس لديك حساب D4C؟",
    register_now: "سجل الآن",
    more_platforms: "قريباً على المنصات:",
    global_active: "الخوادم العالمية نشطة",
    portal_ver: "البوابة: V2.4.0",
    community_title: "المجتمع وتنزيل اللعبة",
    dl_client: "احصل على اللعبة عبر STEAM",
    dl_sub: "متجر Steam (علامة تبويب جديدة) • بروتوكول التطبيق",
    discord_community: "خادم الديسكورد الرسمي",
    discord_sub: "50,000+ عضو نشط",
    rank_verified: "مقاتل موثق",
    steam_linked: "تم ربط STEAM ✓",
    metric_steamid: "معرف STEAM:",
    metric_rank: "الرتبة القتالية:",
    metric_streak: "التتابع الحالي:",
    rank_value: "المستوى 42 (متخصص)",
    btn_copy: "نسخ",
    active_checkin_title: "المكافآت اليومية // استلام",
    checkin_ready_text: "مكافأة اليوم 5 جاهزة! سجل حضورك لاستلام الإمدادات في صندوقك داخل اللعبة.",
    ready: "جاهز",
    btn_claim: "استلام مكافأة اليوم (اليوم 5)",
    milestones_title: "محطات التتابع",
    milestones_sub: "حقق محطات التتابع للحصول على غنائم أسطورية",
    history_title: "نشاط المكافآت الأخير",
    redeem_title: "استرداد رمز الهدية",
    redeem_desc: "أدخل الرمز الترويجي للفعالية أو المجتمع لاسترداد المكافأة:",
    btn_redeem: "استرداد",
    primary_auth_title: "المصادقة الأساسية",
    bindings_title: "ربط المنصات الاختياري",
    primary_login: "معرف تسجيل الدخول الأساسي",
    connected: "متصل",
    twitch_desc: "شاهد البثوث المباشرة للحصول على غنائم",
    discord_desc: "مزامنة رتبة وأدوار الفريق",
    btn_link: "ربط",
    cookie_title: "تفضيلات الخصوصية وملفات تعريف الارتباط",
    cookie_desc: "نستخدم ملفات تعريف ارتباط أساسية للمصادقة وأمان الجلسة.",
    cookie_essential: "الأساسية فقط",
    cookie_accept: "قبول الكل",
    tab_register: "تسجيل حساب D4C",
    tab_forgot: "استعادة كلمة المرور",
    modal_reg_user: "اسم المستخدم المطلوب",
    modal_reg_email: "البريد الإلكتروني الدائم",
    modal_reg_code: "رمز التحقق المكون من 6 أرقام",
    modal_reg_pass: "كلمة المرور",
    modal_reg_retype: "إعادة كتابة كلمة المرور",
    age_gate_label: "أؤكد أن عمري لا يقل عن 13 عاماً (أو 16 عاماً في الاتحاد الأوروبي / المملكة المتحدة).",
    btn_send_code: "إرسال الرمز",
    btn_complete_reg: "إكمال التسجيل",
    modal_rec_account: "البريد أو اسم المستخدم المسجل",
    modal_rec_code: "رمز إعادة الضبط",
    modal_rec_newpass: "كلمة المرور الجديدة",
    btn_reset_pass: "إعادة تعيين كلمة المرور",
    steam_modal_headline: "المصادقة عبر مجتمع STEAM",
    steam_modal_desc: "الاتصال بخدمة Valve Steam OpenID 2.0. بياناتك محمية تماماً.",
    btn_confirm_steam: "تسجيل الدخول كـ GHOST_SNIPER99",
    steam_timeout_hint: "هل تواجه مشاكل في الشبكة؟",
    retry_connection: "إعادة المحاولة",
    support_title: "الدعم",
    support_heading: "هل تحتاج مساعدة؟",
    support_desc: "فريق الدعم الفني الدولي جاهز لمساعدتكم عبر جميع الخوادم.",
    support_bug_text: "أرسل تقارير الأخطاء مباشرة من قائمة اللعبة أو عبر بوابة الدعم.",
    support_response_time: "وقت الاستجابة المتوقع: خلال 24 ساعة (طوال الأسبوع)",
    close_support: "إغلاق",
    footer_status: "حالة الخوادم",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة",
    footer_cookies: "إعدادات الكوكيز",
    footer_gdpr: "خيارات الخصوصية",
    footer_privacy_choices: "خيارات الخصوصية",
    footer_platform_disclaimer: "تعد Valve Corporation المالك لعلامة Steam التجارية. تتوافق هذه البوابة مع شروط Steam Web API.",
    close_dispatch: "إغلاق",
    event_briefing_tag: "إيجاز المهمة التكتيكية",
    event_modal_h3: "عملية ساعة الصفر: مواصفات المهمة",
    event_modal_intro: "انتشر مع فريقك في القطاع 07 واستخرج محركات البيانات المشفرة.",
    mission_1: "استخراج 3 محركات بيانات من قلب المفاعل. المكافأة: +250 رصيد D4C.",
    mission_2: "إصابة 50 ضربة في الرأس بأسلحة DMR. المكافأة: مخطط نيون ريكون.",
    mission_3: "تطهير 1,000,000 قطاع عبر الخوادم العالمية.",
    acknowledged: "تأكيد والعودة",
    lang_fallback_notice: "متوفر بالإنجليزية فقط"
  }
};

// Full news articles with translations and English fallbacks
const NEWS_DETAILS = {
  'patch-240': {
    badge: "UPDATE",
    date: "2026-10-18",
    region: "global",
    titles: {
      en: "Patch 2.4.0: Weapon Balance & Anti-Cheat Protocol V4",
      vi: "Bản vá 2.4.0: Cân bằng vũ khí & Giao thức chống gian lận V4",
      de: "Patch 2.4.0: Waffen-Balancing & Anti-Cheat V4",
      es: "Parche 2.4.0: Balance de Armas y Protocolo Antitrampas V4",
      ja: "パッチ2.4.0: 武器バランス調整 ＆ アンチチートV4"
    },
    contents: {
      en: `
        <p><strong>Deployment Note:</strong> Server node update 2.4.0 is now live across all global regions. Zero client downtime was required.</p>
        <ul>
          <li><strong>DMR Rifle Rebalance:</strong> Reduced first-shot vertical kick by 14% while slightly widening horizontal spray during continuous rapid fire.</li>
          <li><strong>Anti-Cheat V4:</strong> Upgraded heuristic memory scanning for kernel-level protection and automated telemetry validation.</li>
          <li><strong>Network Tick Rate:</strong> Global server tick rate stabilized at solid 64Hz under heavy combat scenarios.</li>
        </ul>
      `,
      vi: `
        <p><strong>Thông báo cập nhật:</strong> Bản vá 2.4.0 đã được áp dụng trên toàn bộ máy chủ toàn cầu mà không gián đoạn dịch vụ.</p>
        <ul>
          <li><strong>Cân bằng súng DMR:</strong> Giảm 14% độ giật phát đầu tiên và tối ưu độ chụm đạn.</li>
          <li><strong>Chống gian lận V4:</strong> Nâng cấp quét bộ nhớ cấp kernel bảo vệ tài khoản người chơi.</li>
          <li><strong>Độ ổn định mạng:</strong> Tần số tick rate 64Hz vững chắc trên toàn cụm quốc tế.</li>
        </ul>
      `,
      de: `
        <p><strong>Bereitstellungshinweis:</strong> Das Serverknoten-Update 2.4.0 ist jetzt weltweit aktiv. Keine Ausfallzeiten erforderlich.</p>
        <ul>
          <li><strong>DMR-Gewehr-Balancing:</strong> Der vertikale Rückstoß beim ersten Schuss wurde um 14 % verringert.</li>
          <li><strong>Anti-Cheat V4:</strong> Verbesserte heuristische Speicherüberwachung für Kernel-Schutz.</li>
          <li><strong>Tickrate:</strong> Globale Tickrate unter hoher Auslastung stabil bei 64 Hz gehalten.</li>
        </ul>
      `,
      es: `
        <p><strong>Nota de despliegue:</strong> La actualización de servidor 2.4.0 ya está activa en todas las regiones globales.</p>
        <ul>
          <li><strong>Balance de rifles DMR:</strong> Retroceso vertical del primer disparo reducido en un 14%.</li>
          <li><strong>Antitrampas V4:</strong> Escaneo heurístico mejorado a nivel de kernel y validación telemétrica.</li>
          <li><strong>Tasa de refresco:</strong> Estabilizada en 64Hz bajo situaciones de combate intenso.</li>
        </ul>
      `,
      ja: `
        <p><strong>配信ノート:</strong> サーバーノードアップデート2.4.0が世界各地のサーバーで稼働を開始しました。</p>
        <ul>
          <li><strong>DMRライフルのバランス調整:</strong> 初弾の縦方向反動を14％軽減しました。</li>
          <li><strong>アンチチートV4:</strong> カーネルレベルの保護機能を強化しました。</li>
          <li><strong>通信頻度:</strong> 高負荷戦闘時でも安定した64Hzの通信頻度を確保しました。</li>
        </ul>
      `
    }
  },
  'tournament-championship': {
    badge: "EVENT",
    date: "2026-10-16",
    region: "global",
    titles: {
      en: "Cyber Strike Global Championship: Open Regional Qualifiers",
      vi: "Giải vô địch Cyber Strike Toàn Cầu: Vòng loại khu vực",
      de: "Cyber Strike Global Championship: Offene regionale Qualifikation",
      es: "Campeonato Mundial Cyber Strike: Clasificatorias Regionales",
      ja: "Cyber Strike 世界選手権：地域予選エントリー開始"
    },
    contents: {
      en: `
        <p>Registration is officially open for the Cyber Strike Global Championship! Assemble your 5-player squad to compete for a <strong>$25,000 USD international prize pool</strong>.</p>
        <p>Regional qualifiers take place simultaneously across Americas, EMEA, and APAC brackets this weekend. Top teams advance to the World Finals broadcasted live on Steam.</p>
      `,
      vi: `
        <p>Cổng đăng ký Giải vô địch Cyber Strike Toàn Cầu đã chính thức mở! Tập hợp biệt đội 5 người để tranh tài giành <strong>tổng giải thưởng 25.000 USD</strong>.</p>
        <p>Vòng loại khu vực diễn ra đồng thời tại Châu Mỹ, EMEA và APAC vào cuối tuần này. Các đội hàng đầu sẽ vào Vòng Chung Kết Thế Giới được trực tiếp trên Steam.</p>
      `,
      de: `
        <p>Die Registrierung für die Cyber Strike Global Championship ist eröffnet! Stellen Sie Ihr 5er-Team auf und kämpfen Sie um einen <strong>internationalen Preispool von 25.000 USD</strong>.</p>
        <p>Die Qualifikationsspiele finden zeitgleich in den Regionen Amerika, EMEA und APAC statt. Die besten Teams qualifizieren sich für das Weltfinale auf Steam.</p>
      `,
      es: `
        <p>¡El registro para el Campeonato Mundial Cyber Strike está oficialmente abierto! Reúne a tu escuadrón de 5 jugadores y compite por una <strong>bolsa de premios de $25,000 USD</strong>.</p>
        <p>Las clasificatorias regionales se jugarán en América, EMEA y APAC este fin de semana. Los mejores avanzarán a la Gran Final transmitida en Steam.</p>
      `,
      ja: `
        <p>Cyber Strike 世界選手権へのエントリー受付を開始しました！5人編成の部隊を結成し、<strong>賞金総額25,000米ドル</strong>を懸けて戦いましょう。</p>
        <p>今週末、南北アメリカ、EMEA、APAC地域で予選が同時開催されます。上位チームはSteam公式配信の世界決勝へ進出します。</p>
      `
    }
  },
  'server-maint': {
    badge: "MAINTENANCE",
    date: "2026-10-14",
    region: "global",
    titles: {
      en: "Global Server Maintenance & Routing Optimization Completed",
      vi: "Hoàn tất bảo trì & tối ưu định tuyến máy chủ toàn cầu",
      de: "Globale Serverwartung & Routing-Optimierung abgeschlossen",
      es: "Mantenimiento y Optimización de Enrutamiento Global Concluido",
      ja: "世界サーバーインフラの最適化メンテナンス完了"
    },
    contents: {
      en: `
        <p>Our infrastructure operations team completed scheduled database indexing and cache invalidation on Frankfurt, Virginia, Singapore, and São Paulo master nodes.</p>
        <p>Global packet routing telemetry confirms an average 18% reduction in latency for international multiplayer lobbies.</p>
      `,
      vi: `
        <p>Đội ngũ kỹ thuật hạ tầng đã hoàn thành lập chỉ mục cơ sở dữ liệu và tối ưu hóa bộ nhớ đệm tại các cụm Frankfurt, Virginia, Singapore và São Paulo.</p>
        <p>Số liệu đo lường định tuyến xác nhận độ trễ giảm trung bình 18% cho các phòng chơi nhiều người chơi quốc tế.</p>
      `,
      de: `
        <p>Unser Infrastruktur-Team hat die geplante Datenbankindizierung auf den Hauptknoten in Frankfurt, Virginia, Singapur und São Paulo abgeschlossen.</p>
        <p>Die Messwerte bestätigen eine durchschnittliche Latenzsenkung um 18 % für internationale Spielrunden.</p>
      `,
      es: `
        <p>Nuestro equipo de infraestructura concluyó la indexación y optimización de memoria en los nodos de Frankfurt, Virginia, Singapur y São Paulo.</p>
        <p>La telemetría confirma una reducción promedio del 18% en la latencia para partidas multijugador internacionales.</p>
      `,
      ja: `
        <p>インフラチームは、フランクフルト、バージニア、シンガポール、サンパウロの各拠点ノードにおける定期メンテナンスを完了しました。</p>
        <p>世界中のマッチメイキングにおいて、通信遅延が平均18％改善されたことが確認されています。</p>
      `
    }
  }
};

// Pseudo-localization generator for stress testing text expansion (+40%)
function createPseudoLoc(dict) {
  const pseudo = {};
  const charMap = {
    'a': 'á', 'b': 'β', 'c': 'ç', 'd': 'đ', 'e': 'é', 'f': 'ƒ', 'g': 'ĝ',
    'h': 'ĥ', 'i': 'î', 'j': 'ĵ', 'k': 'ķ', 'l': 'ł', 'm': 'ɱ', 'n': 'ñ',
    'o': 'ô', 'p': 'ƥ', 'q': 'ʠ', 'r': 'ř', 's': 'š', 't': 'ţ', 'u': 'û',
    'v': 'ṽ', 'w': 'ŵ', 'x': 'ẋ', 'y': 'ý', 'z': 'ž',
    'A': 'Á', 'B': 'Β', 'C': 'Ç', 'D': 'Đ', 'E': 'É', 'F': 'Ƒ', 'G': 'Ĝ',
    'H': 'Ĥ', 'I': 'Î', 'J': 'Ĵ', 'K': 'Ķ', 'L': 'Ł', 'M': 'Ṁ', 'N': 'Ñ',
    'O': 'Ô', 'P': 'Ƥ', 'Q': 'Ǫ', 'R': 'Ř', 'S': 'Š', 'T': 'Ť', 'U': 'Û',
    'V': 'Ṽ', 'W': 'Ŵ', 'X': 'Ẋ', 'Y': 'Ý', 'Z': 'Ž'
  };
  for (const [key, val] of Object.entries(dict)) {
    if (typeof val === 'string') {
      const transformed = val.replace(/([a-zA-Z])/g, m => charMap[m] || m);
      pseudo[key] = `[!!! ${transformed} (+40% EXPANSION) !!!]`;
    } else {
      pseudo[key] = val;
    }
  }
  return pseudo;
}
TRANSLATIONS.pseudo = createPseudoLoc(TRANSLATIONS.en);

const LANG_LOCALE_MAP = {
  en: 'en-US',
  vi: 'vi-VN',
  de: 'de-DE',
  es: 'es-ES',
  ja: 'ja-JP',
  ar: 'ar-SA',
  pseudo: 'en-US'
};

const LANG_AUTONYMS = {
  en: 'English',
  vi: 'Tiếng Việt',
  de: 'Deutsch',
  es: 'Español',
  ja: '日本語',
  ar: 'العربية',
  pseudo: '🧪 Pseudo-Loc (+40%)'
};

// ==========================================================================
// 2. AUDIO SFX ENGINE (DEFAULT OFF)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playBeep(freq = 440, type = 'sine', duration = 0.08, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {}
  }

  playTyping() {
    this.playBeep(560 + Math.random() * 140, 'square', 0.025, 0.015);
  }

  playClick() {
    this.playBeep(880, 'triangle', 0.05, 0.06);
  }

  playSuccess() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playBeep(freq, 'sine', 0.12, 0.07), idx * 75);
    });
  }

  playError() {
    this.playBeep(220, 'sawtooth', 0.16, 0.08);
  }
}

const sfx = new SoundEngine();

// Blacklist of disposable email domains
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'tempmail.com', '10minutemail.com', 'guerrillamail.com', 'mailinator.com',
  'yopmail.com', 'trashmail.com', 'dispostable.com', 'fake.com',
  'throwawaymail.com', 'getairmail.com', 'sharklasers.com', 'fakemailgenerator.com',
  'temp-mail.org', 'crazymailing.com', 'maildrop.cc', 'inboxkitten.com',
  'disposablemail.com', 'burnermail.io', 'mohmal.com', 'emailondeck.com',
  'minuteinbox.com', 'nada.ltd', 'getnada.com', 'tempail.com', 'mytemp.email',
  'trashmail.net', 'generator.email', 'dropmail.me', 'fakemail.net', 'tempmail.net'
]);

// ==========================================================================
// 3. MAIN APPLICATION LOGIC & I18N CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let isAuthenticated = false;
  let checkinClaimed = false;
  let isClaimInProgress = false; // Debounce double-clicks

  // Cache DOM Elements
  const preLoginView = document.getElementById('pre-login-view');
  const postLoginView = document.getElementById('post-login-view');
  const userProfileChip = document.getElementById('user-profile-chip');
  const toastBox = document.getElementById('toast-notification');

  // Language Dropdown Elements
  const btnLangDropdown = document.getElementById('btn-lang-dropdown');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  const currentLangLabel = document.getElementById('current-lang-label');
  const langOptions = document.querySelectorAll('.lang-option');

  // Server Status Popover Elements
  const btnServerStatus = document.getElementById('btn-server-status');
  const serverStatusPopover = document.getElementById('server-status-popover');

  // Timezone & Countdown Elements
  const countdownClock = document.getElementById('countdown-clock');
  const localResetTime = document.getElementById('local-reset-time');

  // Dev QA Simulator Elements (Active only when ?dev=1)
  const devSimulatorBar = document.getElementById('dev-simulator-bar');
  const optLangPseudo = document.getElementById('opt-lang-pseudo');
  const devSimPanel = document.getElementById('dev-sim-panel');
  const btnDevMinimize = document.getElementById('btn-dev-minimize');
  const btnDevRestore = document.getElementById('btn-dev-restore');
  const devStateSelect = document.getElementById('dev-state-select');
  const devRegionSelect = document.getElementById('dev-region-select');
  const btnDevTogglePseudo = document.getElementById('btn-dev-toggle-pseudo');
  const btnDevToggleRtl = document.getElementById('btn-dev-toggle-rtl');

  // Cookie Consent Elements
  const cookieBanner = document.getElementById('cookie-consent-banner');
  const btnCookieAccept = document.getElementById('btn-cookie-accept');
  const btnCookieEssential = document.getElementById('btn-cookie-essential');

  // Masked Steam ID Elements
  const dashSteamIdMasked = document.getElementById('dash-steam-id-masked');
  const btnCopySteamId = document.getElementById('btn-copy-steamid');
  const FULL_STEAM_ID = '76561198028491023';

  // Settings & Audio
  const btnSettingsToggle = document.getElementById('btn-settings-toggle');
  const settingsDropdown = document.getElementById('settings-dropdown');
  const sfxToggleBtn = document.getElementById('sfx-toggle');
  const sfxStateLabel = document.getElementById('sfx-state-label');
  const btnLogout = document.getElementById('btn-logout');
  const btnHeroLogout = document.getElementById('btn-hero-logout');
  const btnSupport = document.getElementById('btn-support');
  const linkFooterSupport = document.getElementById('link-footer-support');
  const linkFooterStatus = document.getElementById('link-footer-status');
  const linkFooterPrivacy = document.getElementById('link-footer-privacy');
  const linkFooterTerms = document.getElementById('link-footer-terms');
  const linkFooterGdpr = document.getElementById('link-footer-gdpr');
  const linkJoinDiscord = document.getElementById('link-join-discord');

  // Auth Card & Accordion Elements
  const btnSteamPrimary = document.getElementById('btn-steam-primary');
  const btnToggleD4cAccordion = document.getElementById('btn-toggle-d4c-accordion');
  const d4cAccordionContent = document.getElementById('d4c-accordion-content');
  const d4cToggleIcon = document.getElementById('d4c-toggle-icon');
  const loginForm = document.getElementById('game-login-form');
  const userInput = document.getElementById('user-input');
  const passwordInput = document.getElementById('password-input');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const eyeIcon = document.getElementById('eye-icon');
  const loginErrorMsg = document.getElementById('login-error-msg');
  const btnSubmitLogin = document.getElementById('btn-submit-login');
  const loginSpinner = document.getElementById('login-spinner');
  const linkForgotPass = document.getElementById('link-forgot-pass');
  const btnTriggerRegister = document.getElementById('btn-trigger-register');

  // Modals
  const steamAuthModal = document.getElementById('steam-auth-modal');
  const closeSteamModal = document.getElementById('close-steam-modal');
  const btnConfirmSteamLogin = document.getElementById('btn-confirm-steam-login');
  const btnRetrySteam = document.getElementById('btn-retry-steam');
  const authModal = document.getElementById('auth-modal');
  const closeAuthModal = document.getElementById('close-auth-modal');
  const authTabBtns = document.querySelectorAll('.auth-tab-btn');
  const authTabContents = document.querySelectorAll('.auth-tab-content');
  const supportModal = document.getElementById('support-modal');
  const closeSupportModal = document.getElementById('close-support-modal');
  const btnCloseSupportModalAction = document.getElementById('btn-close-support-modal-action');
  const newsDetailModal = document.getElementById('news-detail-modal');
  const closeNewsModal = document.getElementById('close-news-modal');
  const btnCloseNewsModalAction = document.getElementById('btn-close-news-modal-action');
  const eventDetailModal = document.getElementById('event-detail-modal');
  const closeEventModal = document.getElementById('close-event-modal');
  const btnCloseEventModal = document.getElementById('btn-close-event-modal');
  const btnViewEvent = document.getElementById('btn-view-event');
  const legalModal = document.getElementById('legal-modal');
  const closeLegalModal = document.getElementById('close-legal-modal');
  const btnCloseLegalModal = document.getElementById('btn-close-legal-modal');
  const legalModalTag = document.getElementById('legal-modal-tag');
  const legalModalHeading = document.getElementById('legal-modal-heading');
  const legalModalContent = document.getElementById('legal-modal-content');

  // Check-in & Promo Elements
  const btnClaimCheckin = document.getElementById('btn-claim-checkin');
  const checkinSuccessMsg = document.getElementById('checkin-success-msg');
  const checkinStreakPill = document.getElementById('checkin-streak-pill');
  const dashStreakCount = document.getElementById('dash-streak-count');
  const formRedeemCode = document.getElementById('form-redeem-code');
  const promoCodeInput = document.getElementById('promo-code-input');
  const redeemFeedback = document.getElementById('redeem-feedback');
  const daySlot5 = document.getElementById('day-slot-5');

  // ==========================================================================
  // UTC RESET & TIMEZONE ENGINE
  // ==========================================================================
  function updateTimezoneAndCountdown() {
    const now = new Date();
    // Next 00:00 UTC
    const nextUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
    const diffMs = nextUtc - now;

    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    if (countdownClock) {
      countdownClock.textContent = `${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M`;
    }

    // Convert next 00:00 UTC to local time string
    if (localResetTime) {
      try {
        const localFormatter = new Intl.DateTimeFormat(LANG_LOCALE_MAP[currentLang] || 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        });
        localResetTime.textContent = localFormatter.format(nextUtc);
      } catch (e) {
        localResetTime.textContent = '07:00 ICT';
      }
    }
  }

  setInterval(updateTimezoneAndCountdown, 60000); // Update every minute
  updateTimezoneAndCountdown();

  // ==========================================================================
  // URL ROUTING & MULTI-LANGUAGE SYSTEM
  // ==========================================================================
  function parseLanguageFromUrl() {
    const searchParams = new URLSearchParams(window.location.search);
    const queryLang = searchParams.get('lang');
    if (queryLang && TRANSLATIONS[queryLang]) return queryLang;

    // Check hash fallback (#lang=de)
    const hash = window.location.hash;
    const match = hash.match(/lang=([a-z]{2})/i);
    if (match && TRANSLATIONS[match[1].toLowerCase()]) return match[1].toLowerCase();

    return null;
  }

  function setLanguage(lang, updateUrl = true) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('portal_lang', lang);
    document.documentElement.lang = lang;

    // Handle RTL scripts
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }

    // Update autonym in dropdown trigger
    if (currentLangLabel) {
      currentLangLabel.textContent = LANG_AUTONYMS[lang] || lang.toUpperCase();
    }

    // Update active dropdown item
    langOptions.forEach(opt => {
      const isSelected = opt.getAttribute('data-lang') === lang;
      opt.classList.toggle('active', isSelected);
      opt.setAttribute('aria-selected', isSelected.toString());
    });

    // Update URL query parameter without reload
    if (updateUrl && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
    }

    // Translate DOM nodes with English fallback
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key];
      if (translation) {
        el.innerHTML = translation;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const placeholder = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key];
      if (placeholder) {
        el.placeholder = placeholder;
      }
    });

    // Format dates with native Intl.DateTimeFormat
    const locale = LANG_LOCALE_MAP[lang] || 'en-US';
    document.querySelectorAll('[data-date]').forEach(el => {
      const iso = el.getAttribute('data-date');
      try {
        const parts = iso.split('-');
        const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
        const dFormatter = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' });
        el.textContent = dFormatter.format(dateObj);
      } catch (e) {
        el.textContent = iso;
      }
    });

    // Format numbers with native Intl.NumberFormat
    try {
      const numFormatter = new Intl.NumberFormat(locale);
      const discordCountEl = document.getElementById('discord-member-count');
      if (discordCountEl) {
        const localizedNum = numFormatter.format(50000);
        discordCountEl.textContent = `${localizedNum}+ ${lang === 'vi' ? 'Đặc Vụ Trực Tuyến' : (lang === 'de' ? 'Aktive Spieler' : (lang === 'es' ? 'Agentes Activos' : (lang === 'ja' ? '人のアクティブ隊員' : 'Active Operatives')))}`;
      }
    } catch (e) {}

    updateTimezoneAndCountdown();
    updateDemoLabel();
  }

  // Initial language resolution hierarchy: URL -> localStorage -> navigator.language -> default 'en'
  const urlLang = parseLanguageFromUrl();
  const savedLang = localStorage.getItem('portal_lang');
  const browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();

  if (urlLang) {
    setLanguage(urlLang, false);
  } else if (savedLang && TRANSLATIONS[savedLang]) {
    setLanguage(savedLang, false);
  } else if (TRANSLATIONS[browserLang]) {
    setLanguage(browserLang, false);
  } else {
    setLanguage('en', false);
  }

  // ==========================================================================
  // MUTUALLY EXCLUSIVE POPOVERS & FOCUS TRAP CONTROLLER
  // ==========================================================================
  let lastFocusedTrigger = null;

  function closeAllPopovers() {
    if (langDropdownMenu) {
      langDropdownMenu.classList.add('hidden');
      if (btnLangDropdown) btnLangDropdown.setAttribute('aria-expanded', 'false');
    }
    if (serverStatusPopover) {
      serverStatusPopover.classList.add('hidden');
      if (btnServerStatus) btnServerStatus.setAttribute('aria-expanded', 'false');
    }
    if (settingsDropdown) {
      settingsDropdown.classList.add('hidden');
    }
  }

  function getFocusableElements(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
  }

  function openModal(modalEl, triggerEl = null) {
    if (!modalEl) return;
    lastFocusedTrigger = triggerEl || document.activeElement;
    closeAllPopovers();
    modalEl.classList.remove('hidden');
    
    // Focus first interactive element inside modal
    requestAnimationFrame(() => {
      const focusables = getFocusableElements(modalEl);
      if (focusables.length > 0) {
        focusables[0].focus();
      }
    });
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    sfx.playClick();
    modalEl.classList.add('hidden');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      try {
        lastFocusedTrigger.focus();
      } catch (e) {}
    }
  }

  // Focus trap on all modals
  document.querySelectorAll('.auth-modal').forEach(modal => {
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusables = getFocusableElements(modal);
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Backdrop click to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // Global Escape key closes open popovers or modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const isPopoverOpen = (langDropdownMenu && !langDropdownMenu.classList.contains('hidden')) ||
                            (serverStatusPopover && !serverStatusPopover.classList.contains('hidden')) ||
                            (settingsDropdown && !settingsDropdown.classList.contains('hidden'));
      if (isPopoverOpen) {
        closeAllPopovers();
        return;
      }
      const openModals = document.querySelectorAll('.auth-modal:not(.hidden)');
      if (openModals.length > 0) {
        const topModal = openModals[openModals.length - 1];
        closeModal(topModal);
      }
    }
  });

  // Global click outside to close popovers
  document.addEventListener('click', (e) => {
    const isLangClick = btnLangDropdown && (btnLangDropdown === e.target || btnLangDropdown.contains(e.target) || (langDropdownMenu && langDropdownMenu.contains(e.target)));
    const isServerClick = btnServerStatus && (btnServerStatus === e.target || btnServerStatus.contains(e.target) || (serverStatusPopover && serverStatusPopover.contains(e.target)));
    const isSettingsClick = btnSettingsToggle && (btnSettingsToggle === e.target || btnSettingsToggle.contains(e.target) || (settingsDropdown && settingsDropdown.contains(e.target)));

    if (!isLangClick && !isServerClick && !isSettingsClick) {
      closeAllPopovers();
    }
  });

  // Language Dropdown Controls (Mutually Exclusive)
  if (btnLangDropdown) {
    btnLangDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      const willOpen = langDropdownMenu && langDropdownMenu.classList.contains('hidden');
      closeAllPopovers();
      if (willOpen && langDropdownMenu) {
        langDropdownMenu.classList.remove('hidden');
        btnLangDropdown.setAttribute('aria-expanded', 'true');
      }
    });
  }

  langOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      sfx.playClick();
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang, true);
      closeAllPopovers();
      showToast(LANG_AUTONYMS[lang]);
    });
  });

  // Server Status Popover (Mutually Exclusive)
  if (btnServerStatus) {
    btnServerStatus.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      const willOpen = serverStatusPopover && serverStatusPopover.classList.contains('hidden');
      closeAllPopovers();
      if (willOpen && serverStatusPopover) {
        serverStatusPopover.classList.remove('hidden');
        btnServerStatus.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // ==========================================================================
  // D4C ACCORDION TOGGLE
  // ==========================================================================
  let isD4cExpanded = false;
  btnToggleD4cAccordion.addEventListener('click', () => {
    sfx.playClick();
    isD4cExpanded = !isD4cExpanded;
    btnToggleD4cAccordion.setAttribute('aria-expanded', isD4cExpanded.toString());

    if (isD4cExpanded) {
      d4cAccordionContent.classList.remove('hidden');
      d4cToggleIcon.textContent = '−';
      userInput.focus();
    } else {
      d4cAccordionContent.classList.add('hidden');
      d4cToggleIcon.textContent = '+';
    }
  });

  // ==========================================================================
  // NEWS FEED REGION FILTERING & DETAIL MODAL
  // ==========================================================================
  const regionFilterBtns = document.querySelectorAll('.region-filter-btn');
  const newsArticles = document.querySelectorAll('#news-articles-list .news-item');

  regionFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      const region = btn.getAttribute('data-region');
      regionFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      newsArticles.forEach(article => {
        const articleRegion = article.getAttribute('data-region');
        if (region === 'all' || articleRegion === region || articleRegion === 'global') {
          article.style.display = 'block';
        } else {
          article.style.display = 'none';
        }
      });
    });
  });

  // Open news article modal with English fallback check
  newsArticles.forEach(item => {
    item.addEventListener('click', () => {
      sfx.playClick();
      const newsId = item.getAttribute('data-news-id');
      const article = NEWS_DETAILS[newsId];
      if (!article) return;

      const fallbackBadge = document.getElementById('news-lang-fallback-badge');
      const modalHeading = document.getElementById('news-modal-heading');
      const modalContent = document.getElementById('news-modal-content');

      document.getElementById('news-modal-badge').textContent = article.badge;
      document.getElementById('news-modal-badge').className = `news-category-badge badge-${article.badge.toLowerCase()}`;

      // Date formatting
      try {
        const parts = article.date.split('-');
        const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
        const dFormatter = new Intl.DateTimeFormat(LANG_LOCALE_MAP[currentLang] || 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        document.getElementById('news-modal-date').textContent = dFormatter.format(dateObj);
      } catch (e) {
        document.getElementById('news-modal-date').textContent = article.date;
      }

      // Check translation availability
      if (article.titles[currentLang] && article.contents[currentLang]) {
        fallbackBadge.classList.add('hidden');
        modalHeading.textContent = article.titles[currentLang];
        modalContent.innerHTML = article.contents[currentLang];
      } else {
        // Fallback to English
        fallbackBadge.classList.remove('hidden');
        fallbackBadge.textContent = TRANSLATIONS[currentLang]?.lang_fallback_notice || "Only available in English";
        modalHeading.textContent = article.titles['en'];
        modalContent.innerHTML = article.contents['en'];
      }

      openModal(newsDetailModal, item);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });

  [closeNewsModal, btnCloseNewsModalAction].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        closeModal(newsDetailModal);
      });
    }
  });

  // Event modal trigger
  if (btnViewEvent) {
    btnViewEvent.addEventListener('click', () => {
      openModal(eventDetailModal, btnViewEvent);
    });
  }

  [closeEventModal, btnCloseEventModal].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        closeModal(eventDetailModal);
      });
    }
  });

  // ==========================================================================
  // MASKED STEAM ID PRIVACY & COPY TO CLIPBOARD
  // ==========================================================================
  if (btnCopySteamId) {
    btnCopySteamId.addEventListener('click', () => {
      sfx.playClick();
      navigator.clipboard.writeText(FULL_STEAM_ID).then(() => {
        showToast(currentLang === 'vi' ? 'Đã sao chép Steam ID!' : (currentLang === 'de' ? 'Steam-ID kopiert!' : (currentLang === 'es' ? '¡ID de Steam copiada!' : (currentLang === 'ja' ? 'Steam IDをコピーしました！' : 'Steam ID copied!'))));
      }).catch(() => {
        showToast(FULL_STEAM_ID);
      });
    });
  }

  // ==========================================================================
  // GDPR COOKIE CONSENT BANNER
  // ==========================================================================
  const cookieChoice = localStorage.getItem('cookie_consent');
  if (!cookieChoice && cookieBanner) {
    cookieBanner.classList.remove('hidden');
  }

  if (btnCookieAccept) {
    btnCookieAccept.addEventListener('click', () => {
      sfx.playClick();
      localStorage.setItem('cookie_consent', 'all');
      cookieBanner.classList.add('hidden');
    });
  }

  if (btnCookieEssential) {
    btnCookieEssential.addEventListener('click', () => {
      sfx.playClick();
      localStorage.setItem('cookie_consent', 'essential');
      cookieBanner.classList.add('hidden');
    });
  }

  // Footer Cookie Preferences Link
  const linkFooterCookies = document.getElementById('link-footer-cookies');
  if (linkFooterCookies) {
    linkFooterCookies.addEventListener('click', (e) => {
      e.preventDefault();
      cookieBanner.classList.remove('hidden');
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }

  if (btnSettingsToggle) {
    btnSettingsToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      const willOpen = settingsDropdown && settingsDropdown.classList.contains('hidden');
      closeAllPopovers();
      if (willOpen && settingsDropdown) {
        settingsDropdown.classList.remove('hidden');
      }
    });
  }

  sfxToggleBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    if (sfx.enabled) {
      sfx.init();
      sfxToggleBtn.classList.add('on');
      sfxStateLabel.textContent = 'ON';
      sfx.playBeep(660, 'sine', 0.08);
      showToast(currentLang === 'vi' ? 'Đã bật âm thanh' : 'SFX Audio Enabled');
    } else {
      sfxToggleBtn.classList.remove('on');
      sfxStateLabel.textContent = 'OFF';
      showToast(currentLang === 'vi' ? 'Đã tắt âm thanh' : 'SFX Audio Muted');
    }
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => sfx.playTyping());
  });

  // Toast Notification
  let toastTimer = null;
  function showToast(message) {
    if (!toastBox) return;
    toastBox.textContent = message;
    toastBox.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastBox.classList.add('hidden');
    }, 2800);
  }

  // ==========================================================================
  // AUTHENTICATION STATE CONTROLLER
  // ==========================================================================
  function setAuthState(loggedIn, operativeName = 'Ghost_Sniper99') {
    isAuthenticated = loggedIn;
    if (loggedIn) {
      preLoginView.classList.add('hidden');
      postLoginView.classList.remove('hidden');
      userProfileChip.classList.remove('hidden');
      document.getElementById('header-user-name').textContent = operativeName;
      document.getElementById('dash-user-name').textContent = operativeName;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      postLoginView.classList.add('hidden');
      preLoginView.classList.remove('hidden');
      userProfileChip.classList.add('hidden');
      loginErrorMsg.classList.add('hidden');
      loginForm.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    updateDemoLabel();
  }

  function updateDemoLabel() {
    if (devStateSelect) {
      devStateSelect.value = isAuthenticated ? (checkinClaimed ? 'claimed' : 'ready') : 'guest';
    }
  }

  // Logouts
  [btnLogout, btnHeroLogout].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick();
        setAuthState(false);
      });
    }
  });

  // ==========================================================================
  // STEAM OPENID & TIMEOUT RETRY FLOW
  // ==========================================================================
  if (btnSteamPrimary) {
    btnSteamPrimary.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(steamAuthModal, btnSteamPrimary);
    });
  }

  if (closeSteamModal) {
    closeSteamModal.addEventListener('click', () => {
      closeModal(steamAuthModal);
    });
  }

  if (btnConfirmSteamLogin) {
    btnConfirmSteamLogin.addEventListener('click', () => {
      sfx.playSuccess();
      closeModal(steamAuthModal);
      setAuthState(true, 'Ghost_Sniper99');
      showToast(currentLang === 'vi' ? 'Đăng nhập Steam thành công!' : 'Steam Sign-in verified!');
    });
  }

  btnRetrySteam.addEventListener('click', () => {
    sfx.playClick();
    showToast('Retrying Steam OpenID connection...');
    setTimeout(() => {
      sfx.playSuccess();
      showToast('Steam handshake restored.');
    }, 600);
  });

  // ==========================================================================
  // D4C ACCOUNT LOGIN FORM
  // ==========================================================================
  togglePasswordBtn.addEventListener('click', () => {
    sfx.playClick();
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.innerHTML = '<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>';
    } else {
      passwordInput.type = 'password';
      eyeIcon.innerHTML = '<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>';
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = userInput.value.trim();
    const password = passwordInput.value;
    loginErrorMsg.classList.add('hidden');

    if (!username || !password) {
      sfx.playError();
      loginErrorMsg.textContent = 'Please enter both your username and password.';
      loginErrorMsg.classList.remove('hidden');
      return;
    }

    if (username.length < 3) {
      sfx.playError();
      loginErrorMsg.textContent = 'Username must be at least 3 characters.';
      loginErrorMsg.classList.remove('hidden');
      userInput.focus();
      return;
    }

    if (password.length < 6) {
      sfx.playError();
      loginErrorMsg.textContent = 'Password must be at least 6 characters.';
      loginErrorMsg.classList.remove('hidden');
      passwordInput.focus();
      return;
    }

    btnSubmitLogin.disabled = true;
    loginSpinner.classList.remove('hidden');
    sfx.playClick();

    setTimeout(() => {
      btnSubmitLogin.disabled = false;
      loginSpinner.classList.add('hidden');
      sfx.playSuccess();
      setAuthState(true, username);
      showToast(`Signed in as [${username}]`);
    }, 550);
  });

  // ==========================================================================
  // D4C REGISTRATION & FORGOT PASSWORD MODALS
  // ==========================================================================
  function openAuthModal(targetTab = 'tab-signup', triggerEl = null) {
    switchAuthTab(targetTab);
    openModal(authModal, triggerEl);
  }

  if (btnTriggerRegister) {
    btnTriggerRegister.addEventListener('click', () => openAuthModal('tab-signup', btnTriggerRegister));
  }

  if (linkForgotPass) {
    linkForgotPass.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('tab-forgot', linkForgotPass);
    });
  }

  if (closeAuthModal) {
    closeAuthModal.addEventListener('click', () => {
      closeModal(authModal);
    });
  }

  function switchAuthTab(tabId) {
    authTabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    authTabContents.forEach(content => {
      content.classList.toggle('active', content.id === tabId);
    });
  }

  authTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick();
      switchAuthTab(btn.getAttribute('data-tab'));
    });
  });

  // Registration & Email Validation
  const signupEmail = document.getElementById('signup-email');
  const btnSendCode = document.getElementById('btn-send-code');
  const emailValidationMsg = document.getElementById('email-validation-msg');
  const signupPassword = document.getElementById('signup-password');
  const signupRetypePassword = document.getElementById('signup-retype-password');
  const passwordMatchMsg = document.getElementById('password-match-msg');
  const formModalSignup = document.getElementById('form-modal-signup');
  const formModalForgot = document.getElementById('form-modal-forgot');
  const forgotAccount = document.getElementById('forgot-account');
  const btnForgotSendCode = document.getElementById('btn-forgot-send-code');
  const forgotValidationMsg = document.getElementById('forgot-validation-msg');
  const chkAgeGate = document.getElementById('chk-age-gate');

  let generatedRegCode = null;
  btnSendCode.addEventListener('click', () => {
    const email = signupEmail.value.trim();
    if (!email) {
      signupEmail.focus();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailValidationMsg.className = 'email-validation-msg error';
      emailValidationMsg.textContent = 'Invalid email format.';
      emailValidationMsg.classList.remove('hidden');
      return;
    }
    const domain = email.split('@')[1].toLowerCase();
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      emailValidationMsg.className = 'email-validation-msg error';
      emailValidationMsg.textContent = 'Disposable email addresses are not permitted.';
      emailValidationMsg.classList.remove('hidden');
      return;
    }

    sfx.playSuccess();
    generatedRegCode = Math.floor(100000 + Math.random() * 900000).toString();
    emailValidationMsg.className = 'email-validation-msg success';
    emailValidationMsg.textContent = `✓ Verification code sent to [${email}] -> CODE: [${generatedRegCode}]`;
    emailValidationMsg.classList.remove('hidden');

    let cooldown = 60;
    btnSendCode.disabled = true;
    btnSendCode.textContent = `${cooldown}S`;
    const cdTimer = setInterval(() => {
      cooldown--;
      if (cooldown <= 0) {
        clearInterval(cdTimer);
        btnSendCode.disabled = false;
        btnSendCode.textContent = 'SEND CODE';
      } else {
        btnSendCode.textContent = `${cooldown}S`;
      }
    }, 1000);
  });

  formModalSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('signup-username').value.trim();
    const pass = signupPassword.value;
    const retype = signupRetypePassword.value;
    const code = document.getElementById('signup-code').value.trim();

    if (!chkAgeGate.checked) {
      alert('Please confirm you meet the age requirement for your region.');
      return;
    }
    if (pass !== retype) {
      alert('Passwords do not match.');
      return;
    }
    if (!generatedRegCode || code !== generatedRegCode) {
      alert('Invalid or missing verification code.');
      return;
    }

    sfx.playSuccess();
    closeModal(authModal);
    userInput.value = user;
    passwordInput.value = pass;
    setAuthState(true, user);
  });

  btnForgotSendCode.addEventListener('click', () => {
    const acc = forgotAccount.value.trim();
    if (!acc) return;
    sfx.playSuccess();
    const resetCode = Math.floor(100000 + Math.random() * 900000);
    forgotValidationMsg.className = 'email-validation-msg success';
    forgotValidationMsg.textContent = `✓ Reset code sent to [${acc}] -> CODE: [${resetCode}]`;
    forgotValidationMsg.classList.remove('hidden');
  });

  formModalForgot.addEventListener('submit', (e) => {
    e.preventDefault();
    sfx.playSuccess();
    closeModal(authModal);
    showToast('Password reset successfully.');
  });

  // Support Modal & Channels
  [btnSupport, linkFooterSupport, linkJoinDiscord].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(supportModal, btn);
      });
    }
  });

  [closeSupportModal, btnCloseSupportModalAction].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        closeModal(supportModal);
      });
    }
  });

  // Support 1-Click Copy Buttons
  document.querySelectorAll('.btn-copy-support').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      sfx.playClick();
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.textContent;
          btn.textContent = '✓ COPIED';
          btn.style.background = '#00c853';
          btn.style.color = '#000000';
          showToast(`Copied to clipboard: ${text}`);
          setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
            btn.style.color = '';
          }, 1800);
        }).catch(() => {
          showToast(`Copy manually: ${text}`);
        });
      }
    });
  });

  // ==========================================================================
  // OPERATIVE CHECK-IN (DEBOUNCED & DOUBLE-CLICK SAFE)
  // ==========================================================================
  btnClaimCheckin.addEventListener('click', () => {
    if (checkinClaimed || isClaimInProgress) return;
    isClaimInProgress = true;
    sfx.playSuccess();

    // Visual loading state
    btnClaimCheckin.disabled = true;
    btnClaimCheckin.textContent = 'CLAIMING...';

    setTimeout(() => {
      checkinClaimed = true;
      isClaimInProgress = false;

      daySlot5.classList.remove('ready-to-claim');
      daySlot5.classList.add('claimed');
      daySlot5.querySelector('.day-status-pill').textContent = '✓';
      daySlot5.querySelector('.day-status-pill').className = 'day-status-pill claimed-pill';

      checkinStreakPill.textContent = '6 / 7 DAYS';
      dashStreakCount.textContent = `🔥 6 ${currentLang === 'vi' ? 'NGÀY' : (currentLang === 'de' ? 'TAGE' : (currentLang === 'es' ? 'DÍAS' : (currentLang === 'ja' ? '日' : 'DAYS')))}`;

      btnClaimCheckin.textContent = '✓ TODAY\'S SUPPLY CLAIMED';

      checkinSuccessMsg.classList.remove('hidden');
      checkinSuccessMsg.textContent = '✓ 1x Tactical Armor Pack has been dispatched to your global in-game inventory vault.';

      showToast('Check-in reward delivered!');
    }, 450);
  });

  // Promo Code with Specific Regional Restrictions
  const PROMO_CODES_DATABASE = {
    'CYBER2026': { reward: '500 D4C Credits + 1x Neon Weapon Blueprint', region: 'global' },
    'OP_STRIKE': { reward: '3-Day 2x Battle EXP Booster', region: 'global' },
    'APAC_EXCLUSIVE': { reward: '1x Dragon Fire Weapon Blueprint', region: 'apac', regionName: 'Asia-Pacific (APAC)' },
    'EU_QUALIFIER': { reward: '1x Valkyrie Squad Emblem', region: 'emea', regionName: 'Europe & Middle East (EMEA)' },
    'AMER_CHAMPION': { reward: '1x Liberty Strike Tactical Camo', region: 'americas', regionName: 'Americas (NA/SA)' }
  };

  formRedeemCode.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = promoCodeInput.value.trim().toUpperCase();
    redeemFeedback.classList.remove('hidden');

    if (!code) {
      sfx.playError();
      redeemFeedback.className = 'redeem-feedback error';
      redeemFeedback.textContent = currentLang === 'vi' ? 'Vui lòng nhập mã quà tặng.' :
        (currentLang === 'de' ? 'Bitte geben Sie einen Gutscheincode ein.' :
        (currentLang === 'es' ? 'Por favor ingrese un código.' :
        (currentLang === 'ja' ? 'コードを入力してください。' :
        (currentLang === 'ar' ? 'يرجى إدخال رمز الهدية.' : 'Please enter a promo code.'))));
      return;
    }

    const codeData = PROMO_CODES_DATABASE[code];

    if (codeData) {
      if (codeData.region === 'global') {
        sfx.playSuccess();
        redeemFeedback.className = 'redeem-feedback success';
        redeemFeedback.textContent = `✓ Activated [${code}]: ${codeData.reward}`;
        promoCodeInput.value = '';
      } else {
        // Specific Region-Restriction Error
        sfx.playError();
        redeemFeedback.className = 'redeem-feedback error';
        const regionErrorMsg = currentLang === 'vi' ? `⚠️ Mã quà không hợp lệ cho khu vực của bạn: Mã này chỉ dành riêng cho cụm máy chủ ${codeData.regionName}.` :
          (currentLang === 'de' ? `⚠️ Gutscheincode für Ihre Region nicht gültig: Dieser Code ist auf den Cluster ${codeData.regionName} beschränkt.` :
          (currentLang === 'es' ? `⚠️ Código no válido para su región: Este cupón está restringido al clúster ${codeData.regionName}.` :
          (currentLang === 'ja' ? `⚠️ お住まいの地域では無効なコードです: このコードは${codeData.regionName}専用です。` :
          (currentLang === 'ar' ? `⚠️ الرمز غير صالح لمنطقتك: هذا الرمز مخصص فقط لمجموعة خوادم ${codeData.regionName}.` :
          `⚠️ Code not valid for your region: This voucher is restricted to the ${codeData.regionName} server cluster.`))));
        redeemFeedback.textContent = regionErrorMsg;
      }
    } else {
      // General invalid or expired code
      sfx.playError();
      redeemFeedback.className = 'redeem-feedback error';
      const notFoundMsg = currentLang === 'vi' ? '✗ Mã quà không tồn tại hoặc đã hết hạn sử dụng.' :
        (currentLang === 'de' ? '✗ Gutscheincode existiert nicht oder ist abgelaufen.' :
        (currentLang === 'es' ? '✗ El código no existe o ha caducado.' :
        (currentLang === 'ja' ? '✗ コードが存在しないか、有効期限が切れています。' :
        (currentLang === 'ar' ? '✗ الرمز الترويجي غير موجود أو انتهت صلاحيته.' :
        '✗ Promo code does not exist or has expired.'))));
      redeemFeedback.textContent = notFoundMsg;
    }
  });

  // Optional platform connect buttons
  ['btn-link-twitch', 'btn-link-discord'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick();
        btn.textContent = 'LINKED';
        btn.disabled = true;
        btn.style.background = '#00c853';
        btn.style.color = '#000000';
        showToast('Account linked successfully.');
      });
    }
  });

  // ==========================================================================
  // LEGAL & COMPLIANCE MODAL (REAL CONTENT FOR PRIVACY, TERMS, GDPR)
  // ==========================================================================
  const LEGAL_DOCS = {
    privacy: {
      tag: "LEGAL // PRIVACY POLICY",
      heading: "Cyber Strike Portal Privacy Policy",
      content: `
        <p><strong>Last Updated: October 18, 2026</strong></p>
        <p>D4C Studio Inc. ("we", "us", or "our") respects your digital privacy. This policy explains how we process operational data when you access the Cyber Strike Global Portal.</p>
        <h4>1. Authentication & Valve Steam OpenID</h4>
        <p>When you sign in using Steam, authentication is handled directly by Valve Corporation via Steam OpenID 2.0. We receive only your public 64-bit Steam ID, community display name, and avatar URL. <strong>We never request, store, or have access to your Steam password or payment details.</strong></p>
        <h4>2. Data Usage & Drops Delivery</h4>
        <p>Your identifier is used exclusively to:</p>
        <ul>
          <li>Validate active player status and deliver in-game rewards into your game client vault.</li>
          <li>Synchronize daily check-in streaks across international UTC boundaries.</li>
          <li>Enforce fair play and prevent automated bot claim exploitation.</li>
        </ul>
        <h4>3. Telemetry & Cookies</h4>
        <p>We use essential cookies to maintain secure sessions. With your permission, anonymized telemetry cookies measure regional ping to optimize cluster routing.</p>
      `
    },
    terms: {
      tag: "LEGAL // TERMS OF SERVICE",
      heading: "Cyber Strike Terms of Service",
      content: `
        <p><strong>Effective Date: October 18, 2026</strong></p>
        <p>By accessing the Cyber Strike Account Portal, you agree to comply with the following operational terms:</p>
        <h4>1. Fair Play & Anti-Cheat Protocol</h4>
        <p>Cyber Strike enforces strict Anti-Cheat Protocol V4 at both the portal and game client layer. Use of unauthorized automation scripts, claim macros, proxy routing exploiters, or memory tampering tools will result in permanent suspension of your D4C account and reporting to Valve Anti-Cheat (VAC).</p>
        <h4>2. In-Game Virtual Items & Blueprints</h4>
        <p>Daily check-in drops, weapon blueprints, and tactical credits credited via this portal are linked to your Steam game account. Items possess no real-world monetary value and may not be traded outside authorized Steam Community Market features.</p>
        <h4>3. Global Service Availability</h4>
        <p>While we target 99.98% cluster availability across our Virginia, Frankfurt, Singapore, and São Paulo datacenters, scheduled server maintenance windows occur weekly on Tuesdays at 02:00 UTC.</p>
      `
    },
    gdpr: {
      tag: "COMPLIANCE // PRIVACY CHOICES",
      heading: "Your Privacy Rights & Data Choices (GDPR / CCPA)",
      content: `
        <p><strong>Global Data Protection & Privacy Rights</strong></p>
        <p>Regardless of your geographic region, D4C Studio affords all operatives the privacy protections guaranteed under the European General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).</p>
        <h4>Your Rights:</h4>
        <ul>
          <li><strong>Right to Access:</strong> You can request a complete copy of your account logs and claim history at any time.</li>
          <li><strong>Right to Rectification:</strong> You may correct linked publisher accounts and operational contact email addresses.</li>
          <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> You may permanently purge your D4C account records and unlink all third-party services.</li>
          <li><strong>Right to Object:</strong> You can disable all optional performance and latency telemetry cookies with one click.</li>
        </ul>
        <div class="legal-action-box" style="margin-top: 18px; display: flex; flex-direction: column; gap: 10px;">
          <button type="button" class="modal-submit-btn" id="btn-export-data">📥 REQUEST DATA EXPORT (.JSON)</button>
          <button type="button" class="modal-submit-btn" id="btn-purge-data" style="background: #ff3366; color: #fff;">⚠️ REQUEST ACCOUNT DATA ERASURE</button>
        </div>
      `
    }
  };

  function showLegalDoc(docKey, triggerEl = null) {
    const doc = LEGAL_DOCS[docKey];
    if (!doc || !legalModal) return;
    if (legalModalTag) legalModalTag.textContent = doc.tag;
    if (legalModalHeading) legalModalHeading.textContent = doc.heading;
    if (legalModalContent) legalModalContent.innerHTML = doc.content;

    const btnExport = document.getElementById('btn-export-data');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        sfx.playSuccess();
        const exportData = {
          operative: isAuthenticated ? 'Ghost_Sniper99' : 'Guest',
          steamId: isAuthenticated ? FULL_STEAM_ID : null,
          streak: checkinClaimed ? 6 : 5,
          timestamp: new Date().toISOString(),
          privacySettings: { telemetry: false, marketing: false }
        };
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cyber_strike_data_${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data export downloaded.');
      });
    }

    const btnPurge = document.getElementById('btn-purge-data');
    if (btnPurge) {
      btnPurge.addEventListener('click', () => {
        if (confirm('Are you sure you want to request complete data erasure under GDPR? All linked profiles will be queued for deletion.')) {
          sfx.playSuccess();
          showToast('Data erasure ticket #GDPR-9428 registered.');
          closeModal(legalModal);
        }
      });
    }

    openModal(legalModal, triggerEl);
  }

  if (linkFooterPrivacy) {
    linkFooterPrivacy.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalDoc('privacy', linkFooterPrivacy);
    });
  }

  if (linkFooterTerms) {
    linkFooterTerms.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalDoc('terms', linkFooterTerms);
    });
  }

  if (linkFooterGdpr) {
    linkFooterGdpr.addEventListener('click', (e) => {
      e.preventDefault();
      showLegalDoc('gdpr', linkFooterGdpr);
    });
  }

  if (linkFooterStatus) {
    linkFooterStatus.addEventListener('click', (e) => {
      e.preventDefault();
      sfx.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeAllPopovers();
      if (serverStatusPopover && btnServerStatus) {
        serverStatusPopover.classList.remove('hidden');
        btnServerStatus.setAttribute('aria-expanded', 'true');
        btnServerStatus.focus();
      }
    });
  }

  [closeLegalModal, btnCloseLegalModal].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        closeModal(legalModal);
      });
    }
  });

  // ==========================================================================
  // SCROLLSPY & SMOOTH ANCHOR NAVIGATION
  // ==========================================================================
  const navSections = [
    { id: 'events-section', link: document.querySelector('.nav-link[href="#events-section"]') },
    { id: 'checkin-section', link: document.querySelector('.nav-link[href="#checkin-section"]') },
    { id: 'news-section', link: document.querySelector('.nav-link[href="#news-section"]') }
  ];

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navSections.forEach(item => {
            if (item.link) {
              if (item.id === entry.target.id) {
                item.link.classList.add('active');
              } else {
                item.link.classList.remove('active');
              }
            }
          });
        }
      });
    }, { rootMargin: '-80px 0px -50% 0px', threshold: 0.1 });

    navSections.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) sectionObserver.observe(el);
    });
  }

  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        sfx.playClick();
        targetEl.scrollIntoView({ behavior: 'smooth' });
        if (window.history && window.history.pushState) {
          window.history.pushState(null, null, `#${targetId}`);
        }
      }
    });
  });

  // ==========================================================================
  // QA SIMULATION TOOL (ISOLATED TO ?dev=1 ONLY)
  // ==========================================================================
  const urlParams = new URLSearchParams(window.location.search);
  const isDevMode = urlParams.get('dev') === '1';

  if (!isDevMode) {
    if (devSimulatorBar) devSimulatorBar.remove();
    if (optLangPseudo) optLangPseudo.remove();
  } else {
    if (devSimulatorBar) devSimulatorBar.classList.remove('hidden');
    if (optLangPseudo) optLangPseudo.classList.remove('hidden');

    if (btnDevMinimize && btnDevRestore && devSimPanel) {
      btnDevMinimize.addEventListener('click', () => {
        devSimPanel.classList.add('hidden');
        btnDevRestore.classList.remove('hidden');
      });
      btnDevRestore.addEventListener('click', () => {
        devSimPanel.classList.remove('hidden');
        btnDevRestore.classList.add('hidden');
      });
    }

    if (devStateSelect) {
      devStateSelect.addEventListener('change', (e) => {
        const state = e.target.value;
        if (state === 'guest') {
          setAuthState(false);
          showToast('QA: Switched to Guest state');
        } else if (state === 'unlinked') {
          setAuthState(true, 'New_Operative42');
          showToast('QA: Registered D4C (Unlinked Steam)');
        } else if (state === 'ready') {
          setAuthState(true, 'Ghost_Sniper99');
          checkinClaimed = false;
          if (daySlot5) {
            daySlot5.classList.add('ready-to-claim');
            daySlot5.classList.remove('claimed');
            const pill = daySlot5.querySelector('.day-status-pill');
            if (pill) {
              pill.textContent = 'READY';
              pill.className = 'day-status-pill ready-pill';
            }
          }
          if (btnClaimCheckin) {
            btnClaimCheckin.disabled = false;
            btnClaimCheckin.innerHTML = '<svg class="claim-gift-svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg> <span data-i18n="btn_claim">CLAIM TODAY\'S REWARD (DAY 5)</span>';
          }
          if (checkinSuccessMsg) checkinSuccessMsg.classList.add('hidden');
          showToast('QA: Switched to Logged In (Ready to Claim)');
        } else if (state === 'claimed') {
          setAuthState(true, 'Ghost_Sniper99');
          if (btnClaimCheckin && !checkinClaimed) {
            btnClaimCheckin.click();
          }
          showToast('QA: Switched to Day 5 Claimed');
        } else if (state === 'streak_loss') {
          showToast('QA: Simulating 24-Hour Streak Grace Window');
          const note = document.querySelector('.streak-grace-note');
          if (note) {
            note.style.borderColor = '#ff3366';
            note.style.background = 'rgba(255, 51, 102, 0.15)';
          }
        } else if (state === 'region_blocked') {
          showToast('QA: Simulating Regional IP Restriction');
          const announcement = document.getElementById('announcement-text');
          if (announcement) {
            announcement.textContent = '⛔ REGIONAL NOTICE: Access from your IP region is restricted by publisher territory license.';
          }
        } else if (state === 'account_locked') {
          showToast('QA: Simulating Account Security Lockout');
          const announcement = document.getElementById('announcement-text');
          if (announcement) {
            announcement.textContent = '🚫 SECURITY LOCKOUT: Account suspended pending Anti-Cheat V4 telemetry review. Contact Support.';
          }
        } else if (state === 'api_error') {
          sfx.playError();
          showToast('⚠️ Error 504: Steam OpenID Gateway Timeout. Retrying connection...');
        } else if (state === 'maint') {
          showToast('QA: Simulating Scheduled Server Maintenance');
          const announcement = document.getElementById('announcement-text');
          if (announcement) {
            announcement.textContent = '⚠️ Scheduled Server Maintenance: Frankfurt and Singapore nodes will undergo routine updates at 02:00 UTC.';
          }
        }
      });
    }

    if (devRegionSelect) {
      devRegionSelect.addEventListener('change', (e) => {
        const reg = e.target.value;
        const matchingBtn = document.querySelector(`.region-filter-btn[data-region="${reg}"]`);
        if (matchingBtn) matchingBtn.click();
        showToast(`QA: Region set to [${reg.toUpperCase()}]`);
      });
    }

    if (btnDevTogglePseudo) {
      btnDevTogglePseudo.addEventListener('click', () => {
        setLanguage(currentLang === 'pseudo' ? 'en' : 'pseudo', true);
      });
    }

    if (btnDevToggleRtl) {
      btnDevToggleRtl.addEventListener('click', () => {
        setLanguage(currentLang === 'ar' ? 'en' : 'ar', true);
      });
    }
  }
});
