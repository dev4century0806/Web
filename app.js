/**
 * CYBER STRIKE // OFFICIAL GAME ACCOUNT & OPERATIONS PORTAL
 * Interactive Controller:
 * - Steam OpenID Primary Flow
 * - Collapsible D4C Publisher Account Accordion
 * - Fixed Parallax-Free Input Logic
 * - Daily Check-in Streak Engine
 * - Dynamic Date Localization & News Modal
 * - Full Bilingual Translation (VI / EN)
 */

// ==========================================================================
// 1. COMPREHENSIVE BILINGUAL TRANSLATION DICTIONARY
// ==========================================================================
const TRANSLATIONS = {
  en: {
    server_online: "ONLINE",
    nav_events: "Events",
    nav_checkin: "Daily Check-in",
    nav_news: "News",
    nav_support: "Support",
    settings_title: "SYSTEM SETTINGS",
    settings_sfx: "SFX Audio Feedback",
    user_lvl: "LVL",
    btn_logout: "LOGOUT",
    badge_event: "EVENT LIVE",
    announcement_text: 'Season 3: "Operation Zero Hour" is active! 2x EXP bonus enabled on all Asian servers.',
    event_tag: "LIMITED TIME EVENT",
    event_timer: "ENDS IN: 3D 14H",
    event_title: "OPERATION ZERO HOUR: CYBER HEIST",
    event_desc: "Infiltrate Sector 07 in the new tactical extraction raid. Double weapon EXP, exclusive Neon Strike skin drops, and special community milestone rewards.",
    btn_event_action: "VIEW EVENT MISSIONS & DETAILS →",
    checkin_title: "DAILY CHECK-IN // OPERATIVE SUPPLY",
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
    checkin_lock_hint: "Log in to claim today's reward: <strong>x250 D4C Credits</strong>!",
    checkin_rule_note: "⚡ Streak Rule: Missing 1 day drops streak count by 1 tier. Check in daily to maintain maximum multipliers.",
    news_title: "TRANSMISSIONS & PATCH NOTES",
    view_all: "ALL DISPATCHES →",
    cat_update: "UPDATE",
    cat_event: "EVENT",
    cat_maint: "MAINTENANCE",
    badge_new: "NEW",
    read_more: "Read dispatch →",
    news_1_title: "Patch 2.4.0: Weapon Balance & Anti-Cheat Protocol V4",
    news_1_snippet: "Revamped recoil patterns for DMR rifles, improved Asian cluster network tick rate, and streamlined client load times.",
    news_2_title: "Community Tournament: Cyber Strike Asia Championship",
    news_2_snippet: "Register your 5-operative squad for the $25,000 regional showdown. Open qualifiers begin this weekend.",
    news_3_title: "Scheduled Server Optimization Completed",
    news_3_snippet: "Asia-South node database indexing successfully updated. Zero service disruption reported.",
    status_ready: "PORTAL READY",
    login_heading: "OPERATIVE LOGIN",
    login_subheading: "Sign in to claim daily rewards and get publisher updates",
    steam_subtext: "SIGN IN THROUGH",
    steam_maintext: "STEAM",
    steam_security_note: "We redirect to Steam OpenID. We will never ask for your Steam password.",
    d4c_accordion_btn: "OR USE D4C ACCOUNT",
    d4c_accordion_hint: "Only use if you have already linked a D4C publisher account",
    ph_user: "Username or email",
    ph_pass: "Password",
    remember_me: "Remember login",
    forgot_pass: "Forgot password?",
    btn_signin: "SIGN IN",
    no_account: "Don't have a D4C account?",
    register_now: "Register now",
    cluster_asia: "CLUSTER: ASIA-SOUTH",
    portal_ver: "PORTAL: V2.4.0",
    community_title: "COMMUNITY & CLIENT",
    dl_client: "DOWNLOAD GAME CLIENT",
    dl_sub: "Via Steam PC Platform",
    discord_community: "OFFICIAL SQUAD DISCORD",
    discord_sub: "50,000+ Active Operatives",
    rank_verified: "VERIFIED OPERATIVE",
    steam_linked: "STEAM CONNECTED ✓",
    metric_steamid: "STEAM ID:",
    metric_rank: "COMBAT RANK:",
    metric_streak: "CURRENT STREAK:",
    active_checkin_title: "DAILY CHECK-IN // SUPPLY CLAIM",
    checkin_ready_text: "Day 5 reward is available! Check in to receive your supply drop directly in your in-game vault.",
    ready: "READY",
    btn_claim: "🎁 CLAIM TODAY'S REWARD (DAY 5)",
    redeem_title: "REDEEM GIFT CODE",
    redeem_desc: "Enter community gift or event code to redeem special rewards:",
    btn_redeem: "REDEEM",
    hint_test_code: "Try test code:",
    or: "or",
    bindings_title: "LINKED PLATFORMS",
    primary_login: "Primary Authentication ID",
    connected: "CONNECTED",
    twitch_desc: "Watch streams to earn loot",
    discord_desc: "Sync squad rank & role",
    btn_link: "LINK",
    tab_register: "REGISTER D4C ACCOUNT",
    tab_forgot: "RECOVER PASSWORD",
    modal_reg_user: "DESIRED OPERATIVE USERNAME",
    modal_reg_email: "PERMANENT GMAIL / EMAIL ADDRESS",
    modal_reg_code: "6-DIGIT VERIFICATION CODE",
    modal_reg_pass: "OPERATIVE PASSWORD",
    modal_reg_retype: "RETYPE PASSWORD (REWRITE)",
    btn_send_code: "SEND CODE",
    btn_complete_reg: "COMPLETE REGISTRATION",
    modal_rec_account: "REGISTERED GMAIL / USERNAME",
    modal_rec_code: "6-DIGIT RESET CODE",
    modal_rec_newpass: "NEW SECURITY PASSWORD",
    btn_reset_pass: "RESET CREDENTIALS & RECOVER",
    steam_modal_headline: "AUTHENTICATING VIA STEAM COMMUNITY",
    steam_modal_desc: "Connecting to Valve Steam OpenID 2.0 service. Your Steam credentials and password are kept 100% private and never shared with D4C Studio.",
    btn_confirm_steam: "SIGN IN AS GHOST_SNIPER99",
    support_title: "D4C OPERATIVE SUPPORT CENTER",
    support_heading: "NEED MISSION ASSISTANCE?",
    support_desc: "Our tactical technical support team operates 24/7 across Asian game servers.",
    support_bug_text: "Submit bug reproduction logs directly via in-game menu.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    close_dispatch: "CLOSE DISPATCH",
    event_briefing_tag: "TACTICAL EVENT BRIEFING",
    event_modal_h3: "OPERATION ZERO HOUR: MISSION SPECS",
    event_modal_intro: "Deploy into Sector 07 with your fireteam. Extraction objectives reset every 12 hours. Earn double weapon proficiency and unlock exclusive Cyber Strike armory gear.",
    mission_1: "Extract 3 encrypted data drives from the reactor core. Reward: +250 D4C Credits.",
    mission_2: "Score 50 headshot eliminations with DMR weapons. Reward: Neon Recon Blueprint.",
    mission_3: "Collectively clear 1,000,000 sectors across Asia servers to unlock free weekend crates.",
    acknowledged: "ACKNOWLEDGE & RETURN"
  },
  vi: {
    server_online: "HOẠT ĐỘNG",
    nav_events: "Sự kiện",
    nav_checkin: "Điểm danh",
    nav_news: "Tin tức",
    nav_support: "Hỗ trợ",
    settings_title: "CÀI ĐẶT HỆ THỐNG",
    settings_sfx: "Âm thanh hiệu ứng (SFX)",
    user_lvl: "CẤP",
    btn_logout: "ĐĂNG XUẤT",
    badge_event: "SỰ KIỆN ĐANG CHẠY",
    announcement_text: 'Mùa 3: "Chiến dịch Giờ Số 0" đang diễn ra! Tăng 2x EXP trên toàn bộ máy chủ Châu Á.',
    event_tag: "SỰ KIỆN CÓ HẠN",
    event_timer: "KẾT THÚC SAU: 3N 14G",
    event_title: "CHIẾN DỊCH GIỜ SỐ 0: ĐỘT KÍCH MẠNG",
    event_desc: "Đột kích Khu vực 07 trong chế độ chiến thuật mới. Nhân đôi kinh nghiệm vũ khí, nhận skin Neon Strike độc quyền và phần thưởng mốc cộng đồng.",
    btn_event_action: "XEM CHI TIẾT SỰ KIỆN & NHIỆM VỤ →",
    checkin_title: "ĐIỂM DANH HÀNG NGÀY // TIẾP TẾ ĐẶC VỤ",
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
    checkin_lock_hint: "Đăng nhập để nhận quà hôm nay: <strong>x250 D4C Credits</strong>!",
    checkin_rule_note: "⚡ Quy tắc chuỗi: Bỏ lỡ 1 ngày sẽ bị lùi 1 bậc chuỗi điểm danh. Hãy điểm danh mỗi ngày để giữ mốc thưởng tối đa.",
    news_title: "BẢN TIN & GHI CHÚ BẢN VÁ",
    view_all: "TẤT CẢ BẢN TIN →",
    cat_update: "CẬP NHẬT",
    cat_event: "SỰ KIỆN",
    cat_maint: "BẢO TRÌ",
    badge_new: "MỚI",
    read_more: "Đọc tiếp →",
    news_1_title: "Bản vá 2.4.0: Cân bằng vũ khí & Giao thức chống gian lận V4",
    news_1_snippet: "Cải tiến độ giật cho súng DMR, nâng cấp tick rate máy chủ Châu Á và tối ưu hóa thời gian tải game.",
    news_2_title: "Giải đấu cộng đồng: Cyber Strike Vô Địch Châu Á",
    news_2_snippet: "Đăng ký đội hình 5 đặc vụ tranh tài giải thưởng 25.000 USD. Vòng loại mở màn vào cuối tuần này.",
    news_3_title: "Hoàn tất bảo trì tối ưu hóa máy chủ định kỳ",
    news_3_snippet: "Cập nhật dữ liệu máy chủ cụm Nam Á thành công. Hoạt động bình thường không gián đoạn.",
    status_ready: "SẴN SÀNG KẾT NỐI",
    login_heading: "ĐĂNG NHẬP ĐẶC VỤ",
    login_subheading: "Đăng nhập để điểm danh và nhận tin mới từ nhà phát hành",
    steam_subtext: "ĐĂNG NHẬP BẰNG",
    steam_maintext: "STEAM",
    steam_security_note: "Chuyển hướng qua Steam OpenID. Chúng tôi không bao giờ hỏi mật khẩu Steam của bạn.",
    d4c_accordion_btn: "HOẶC DÙNG TÀI KHOẢN D4C",
    d4c_accordion_hint: "Chỉ dùng nếu bạn đã liên kết tài khoản nhà phát hành D4C",
    ph_user: "Tên đăng nhập hoặc email",
    ph_pass: "Mật khẩu",
    remember_me: "Ghi nhớ đăng nhập",
    forgot_pass: "Quên mật khẩu?",
    btn_signin: "ĐĂNG NHẬP",
    no_account: "Chưa có tài khoản D4C?",
    register_now: "Đăng ký ngay",
    cluster_asia: "CỤM MÁY CHỦ: NAM Á",
    portal_ver: "CỔNG THÔNG TIN: V2.4.0",
    community_title: "CỘNG ĐỒNG & BỘ CÀI GAME",
    dl_client: "TẢI BỘ CÀI GAME CLIENT",
    dl_sub: "Qua Nền tảng Steam PC",
    discord_community: "DISCORD BIỆT ĐỘI CHÍNH THỨC",
    discord_sub: "Hơn 50.000 Đặc Vụ Trực Tuyến",
    rank_verified: "ĐẶC VỤ ĐÃ XÁC MINH",
    steam_linked: "ĐÃ KẾT NỐI STEAM ✓",
    metric_steamid: "MÃ STEAM:",
    metric_rank: "CẤP ĐỘ CHIẾN ĐẤU:",
    metric_streak: "CHUỖI ĐIỂM DANH:",
    active_checkin_title: "ĐIỂM DANH HÀNG NGÀY // NHẬN TIẾP TẾ",
    checkin_ready_text: "Phần thưởng Ngày 5 đã sẵn sàng! Điểm danh ngay để nhận quà vào hòm đồ trong game.",
    ready: "SẴN SÀNG",
    btn_claim: "🎁 ĐIỂM DANH NHẬN QUÀ (NGÀY 5)",
    redeem_title: "ĐỔI MÃ QUÀ TẶNG (GIFT CODE)",
    redeem_desc: "Nhập mã quà tặng sự kiện hoặc code cộng đồng để nhận quà:",
    btn_redeem: "ĐỔI QUÀ",
    hint_test_code: "Mã thử nghiệm:",
    or: "hoặc",
    bindings_title: "TÀI KHOẢN LIÊN KẾT",
    primary_login: "Định danh đăng nhập chính",
    connected: "ĐÃ KẾT NỐI",
    twitch_desc: "Xem stream nhận quà rơi",
    discord_desc: "Đồng bộ cấp bậc & vai trò biệt đội",
    btn_link: "LIÊN KẾT",
    tab_register: "ĐĂNG KÝ TÀI KHOẢN D4C",
    tab_forgot: "KHÔI PHỤC MẬT KHẨU",
    modal_reg_user: "TÊN ĐẶC VỤ MONG MUỐN",
    modal_reg_email: "ĐỊA CHỈ GMAIL / EMAIL CHÍNH THỨC",
    modal_reg_code: "MÃ XÁC MINH 6 CHỮ SỐ",
    modal_reg_pass: "MẬT KHẨU ĐẶC VỤ",
    modal_reg_retype: "NHẬP LẠI MẬT KHẨU",
    btn_send_code: "GỬI MÃ",
    btn_complete_reg: "HOÀN TẤT ĐĂNG KÝ",
    modal_rec_account: "GMAIL HOẶC TÊN TÀI KHOẢN ĐÃ ĐĂNG KÝ",
    modal_rec_code: "MÃ KHÔI PHỤC 6 CHỮ SỐ",
    modal_rec_newpass: "MẬT KHẨU MỚI",
    btn_reset_pass: "ĐẶT LẠI MẬT KHẨU",
    steam_modal_headline: "ĐANG XÁC THỰC QUA CỘNG ĐỒNG STEAM",
    steam_modal_desc: "Đang kết nối tới dịch vụ Valve Steam OpenID 2.0. Mật khẩu và thông tin đăng nhập Steam của bạn hoàn toàn bảo mật và không bao giờ chia sẻ với D4C Studio.",
    btn_confirm_steam: "ĐĂNG NHẬP VỚI TÊN GHOST_SNIPER99",
    support_title: "TRUNG TÂM HỖ TRỢ ĐẶC VỤ D4C",
    support_heading: "CẦN HỖ TRỢ CHIẾN DỊCH?",
    support_desc: "Đội ngũ kỹ thuật hỗ trợ 24/7 trên toàn bộ cụm máy chủ game Châu Á.",
    support_bug_text: "Gửi báo cáo lỗi trực tiếp qua menu trong game.",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản dịch vụ",
    close_dispatch: "ĐÓNG BẢN TIN",
    event_briefing_tag: "HỒ SƠ TÁC CHIẾN CHIẾN DỊCH",
    event_modal_h3: "CHIẾN DỊCH GIỜ SỐ 0: THÔNG SỐ NHIỆM VỤ",
    event_modal_intro: "Triển khai tới Khu vực 07 cùng hỏa lực biệt đội của bạn. Mục tiêu trích xuất dữ liệu làm mới mỗi 12 giờ. Nhận x2 độ thuần thục vũ khí và mở khóa trang bị kho vũ khí Cyber Strike.",
    mission_1: "Trích xuất 3 ổ dữ liệu mã hóa từ lõi lò phản ứng. Thưởng: +250 D4C Credits.",
    mission_2: "Đạt 50 hạ gục bằng phát bắn vào đầu với vũ khí DMR. Thưởng: Bản vẽ Neon Recon.",
    mission_3: "Cộng đồng toàn máy chủ Châu Á giải cứu 1.000.000 khu vực để mở hòm thưởng miễn phí cuối tuần.",
    acknowledged: "ĐÃ RÕ & QUAY LẠI"
  }
};

// Full news articles content store
const NEWS_DETAILS = {
  'patch-240': {
    titleEn: "Patch 2.4.0: Weapon Balance & Anti-Cheat Protocol V4",
    titleVi: "Bản vá 2.4.0: Cân bằng vũ khí & Giao thức chống gian lận V4",
    badge: "UPDATE",
    date: "2026-10-18",
    contentEn: `
      <p><strong>Deployment Note:</strong> Server node update 2.4.0 is now live across all Asian regions. No client downtime is required.</p>
      <ul>
        <li><strong>DMR Rifle Rebalance:</strong> Reduced first-shot vertical kick by 14% while slightly widening horizontal spray during continuous rapid fire.</li>
        <li><strong>Anti-Cheat V4:</strong> Upgraded heuristic memory scanning for kernel-level protection and automated telemetry validation.</li>
        <li><strong>Network Tick Rate:</strong> Asia-South server tick rate stabilized at solid 64Hz under heavy combat scenarios.</li>
      </ul>
    `,
    contentVi: `
      <p><strong>Thông báo cập nhật:</strong> Phiên bản máy chủ 2.4.0 đã được áp dụng trên toàn bộ khu vực Châu Á mà không làm gián đoạn người chơi.</p>
      <ul>
        <li><strong>Cân bằng súng DMR:</strong> Giảm 14% độ giật dọc phát đầu tiên, đồng thời điều chỉnh độ lệch ngang khi bắn liên thanh.</li>
        <li><strong>Hệ thống chống hack V4:</strong> Nâng cấp quét bộ nhớ cấp kernel và kiểm định dữ liệu người chơi tự động.</li>
        <li><strong>Tần số mạng máy chủ:</strong> Ổn định tick rate 64Hz cho cụm máy chủ Nam Á trong các pha giao tranh quy mô lớn.</li>
      </ul>
    `
  },
  'tournament-asia': {
    titleEn: "Community Tournament: Cyber Strike Asia Championship",
    titleVi: "Giải đấu cộng đồng: Cyber Strike Vô Địch Châu Á",
    badge: "EVENT",
    date: "2026-10-16",
    contentEn: `
      <p>Registration is officially open for the Cyber Strike Asia Championship! Gather your 5-player squad and battle for a <strong>$25,000 USD prize pool</strong>.</p>
      <p>Open qualifiers take place Saturday and Sunday. The top 16 teams will advance to the LAN finals broadcasted live on Steam and Twitch.</p>
    `,
    contentVi: `
      <p>Cổng đăng ký Giải vô địch Cyber Strike Châu Á đã chính thức mở! Hãy tập hợp biệt đội 5 người và tranh tài giành <strong>tổng giải thưởng 25.000 USD</strong>.</p>
      <p>Vòng loại mở rộng diễn ra vào Thứ Bảy và Chủ Nhật. 16 đội xuất sắc nhất sẽ vào vòng chung kết trực tiếp trên Steam và Twitch.</p>
    `
  },
  'server-maint': {
    titleEn: "Scheduled Server Optimization Completed",
    titleVi: "Hoàn tất bảo trì tối ưu hóa máy chủ định kỳ",
    badge: "MAINTENANCE",
    date: "2026-10-14",
    contentEn: `
      <p>Our infrastructure team completed database indexing and cache invalidation on the Asia-South master nodes.</p>
      <p>Average matchmaking latency reduced from 28ms to 16ms across Singapore, Vietnam, Thailand, and Indonesia routing points.</p>
    `,
    contentVi: `
      <p>Đội ngũ kỹ thuật hạ tầng đã hoàn thành lập chỉ mục cơ sở dữ liệu và tối ưu bộ nhớ đệm tại các máy chủ chính khu vực Nam Á.</p>
      <p>Độ trễ tìm trận trung bình đã giảm từ 28ms xuống còn 16ms tại các tuyến định tuyến Singapore, Việt Nam, Thái Lan và Indonesia.</p>
    `
  }
};

// ==========================================================================
// 2. AUDIO SFX ENGINE (DEFAULT OFF PER USER DIRECTIVE)
// ==========================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = false; // Default OFF
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

// Blacklist of disposable and temporary email domains
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
// 3. MAIN APPLICATION LOGIC
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  let currentLang = 'en';
  let isAuthenticated = false;
  let checkinClaimed = false;
  let currentStreak = 5;

  // Cache DOM Elements
  const preLoginView = document.getElementById('pre-login-view');
  const postLoginView = document.getElementById('post-login-view');
  const userProfileChip = document.getElementById('user-profile-chip');
  const toastBox = document.getElementById('toast-notification');

  // Dev Demo Switcher Elements
  const btnDemoToggle = document.getElementById('btn-demo-toggle');
  const demoStateText = document.getElementById('demo-state-text');
  const btnDemoMinimize = document.getElementById('btn-demo-minimize');
  const btnDemoRestore = document.getElementById('btn-demo-restore');
  const demoInnerPanel = document.getElementById('demo-inner-panel');

  // Nav & Settings
  const btnSettingsToggle = document.getElementById('btn-settings-toggle');
  const settingsDropdown = document.getElementById('settings-dropdown');
  const sfxToggleBtn = document.getElementById('sfx-toggle');
  const sfxStateLabel = document.getElementById('sfx-state-label');
  const langBtnVi = document.getElementById('lang-btn-vi');
  const langBtnEn = document.getElementById('lang-btn-en');
  const btnLogout = document.getElementById('btn-logout');
  const btnHeroLogout = document.getElementById('btn-hero-logout');
  const btnSupport = document.getElementById('btn-support');
  const linkFooterSupport = document.getElementById('link-footer-support');
  const linkJoinDiscord = document.getElementById('link-join-discord');

  // Login Form & Accordion Elements
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
  const authModal = document.getElementById('auth-modal');
  const closeAuthModal = document.getElementById('close-auth-modal');
  const authTabBtns = document.querySelectorAll('.auth-tab-btn');
  const authTabContents = document.querySelectorAll('.auth-tab-content');
  const supportModal = document.getElementById('support-modal');
  const closeSupportModal = document.getElementById('close-support-modal');
  const newsDetailModal = document.getElementById('news-detail-modal');
  const closeNewsModal = document.getElementById('close-news-modal');
  const btnCloseNewsModalAction = document.getElementById('btn-close-news-modal-action');
  const eventDetailModal = document.getElementById('event-detail-modal');
  const closeEventModal = document.getElementById('close-event-modal');
  const btnCloseEventModal = document.getElementById('btn-close-event-modal');
  const btnViewEvent = document.getElementById('btn-view-event');

  // Operative Dashboard Elements
  const btnClaimCheckin = document.getElementById('btn-claim-checkin');
  const checkinSuccessMsg = document.getElementById('checkin-success-msg');
  const checkinStreakPill = document.getElementById('checkin-streak-pill');
  const dashStreakCount = document.getElementById('dash-streak-count');
  const formRedeemCode = document.getElementById('form-redeem-code');
  const promoCodeInput = document.getElementById('promo-code-input');
  const redeemFeedback = document.getElementById('redeem-feedback');
  const daySlot5 = document.getElementById('day-slot-5');

  // ==========================================================================
  // LOCALIZATION & DATE FORMATTING
  // ==========================================================================
  function formatDateString(isoDateStr, lang) {
    if (!isoDateStr) return '';
    const parts = isoDateStr.split('-');
    if (parts.length !== 3) return isoDateStr;
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parts[2];

    if (lang === 'vi') {
      return `${day}/${month}/${year}`;
    } else {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return `${monthNames[month - 1]} ${day}, ${year}`;
    }
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem('portal_lang', lang);

    if (lang === 'vi') {
      langBtnVi.classList.add('active');
      langBtnEn.classList.remove('active');
      document.documentElement.lang = 'vi';
    } else {
      langBtnEn.classList.add('active');
      langBtnVi.classList.remove('active');
      document.documentElement.lang = 'en';
    }

    // Translate DOM text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (TRANSLATIONS[lang][key]) {
        el.innerHTML = TRANSLATIONS[lang][key];
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (TRANSLATIONS[lang][key]) {
        el.placeholder = TRANSLATIONS[lang][key];
      }
    });

    // Format all dates dynamically according to locale
    document.querySelectorAll('[data-date]').forEach(el => {
      const iso = el.getAttribute('data-date');
      el.textContent = formatDateString(iso, lang);
    });

    updateDemoLabel();
  }

  // Detect initial language: localStorage -> navigator.language -> default 'en'
  const savedLang = localStorage.getItem('portal_lang');
  if (savedLang && TRANSLATIONS[savedLang]) {
    setLanguage(savedLang);
  } else if (navigator.language && navigator.language.toLowerCase().startsWith('vi')) {
    setLanguage('vi');
  } else {
    setLanguage('en');
  }

  langBtnVi.addEventListener('click', () => {
    sfx.playClick();
    setLanguage('vi');
    showToast('Đã đổi ngôn ngữ sang Tiếng Việt');
  });

  langBtnEn.addEventListener('click', () => {
    sfx.playClick();
    setLanguage('en');
    showToast('Language switched to English');
  });

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
  // NEWS & EVENT MODALS
  // ==========================================================================
  document.querySelectorAll('.news-item--clickable').forEach(item => {
    item.addEventListener('click', () => {
      sfx.playClick();
      const newsId = item.getAttribute('data-news-id');
      const article = NEWS_DETAILS[newsId];
      if (!article) return;

      document.getElementById('news-modal-badge').textContent = article.badge;
      document.getElementById('news-modal-badge').className = `news-category-badge badge-${article.badge.toLowerCase()}`;
      document.getElementById('news-modal-date').textContent = formatDateString(article.date, currentLang);
      document.getElementById('news-modal-heading').textContent = currentLang === 'vi' ? article.titleVi : article.titleEn;
      document.getElementById('news-modal-content').innerHTML = currentLang === 'vi' ? article.contentVi : article.contentEn;

      newsDetailModal.classList.remove('hidden');
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
        sfx.playClick();
        newsDetailModal.classList.add('hidden');
      });
    }
  });

  // Event modal trigger
  btnViewEvent.addEventListener('click', () => {
    sfx.playClick();
    eventDetailModal.classList.remove('hidden');
  });

  [closeEventModal, btnCloseEventModal].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick();
        eventDetailModal.classList.add('hidden');
      });
    }
  });

  // ==========================================================================
  // SFX & SETTINGS DROPDOWN
  // ==========================================================================
  btnSettingsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sfx.playClick();
    settingsDropdown.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!settingsDropdown.contains(e.target) && e.target !== btnSettingsToggle) {
      settingsDropdown.classList.add('hidden');
    }
  });

  sfxToggleBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    if (sfx.enabled) {
      sfx.init();
      sfxToggleBtn.classList.add('on');
      sfxStateLabel.textContent = 'ON';
      sfx.playBeep(660, 'sine', 0.08);
      showToast(currentLang === 'vi' ? 'Đã bật hiệu ứng âm thanh' : 'SFX Audio Enabled');
    } else {
      sfxToggleBtn.classList.remove('on');
      sfxStateLabel.textContent = 'OFF';
      showToast(currentLang === 'vi' ? 'Đã tắt hiệu ứng âm thanh' : 'SFX Audio Muted');
    }
  });

  // Sound on input typing
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => sfx.playTyping());
  });

  // Toast Notification Helper
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
  // STATE SWITCHER: PRE-LOGIN (GUEST) VS POST-LOGIN (OPERATIVE)
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
    if (!demoStateText) return;
    if (isAuthenticated) {
      demoStateText.textContent = currentLang === 'vi' ? 'ĐẶC VỤ (ĐÃ ĐĂNG NHẬP)' : 'OPERATIVE (LOGGED IN)';
    } else {
      demoStateText.textContent = currentLang === 'vi' ? 'KHÁCH (CHƯA ĐĂNG NHẬP)' : 'GUEST (LOGGED OUT)';
    }
  }

  // Floating Demo State Switcher
  btnDemoToggle.addEventListener('click', () => {
    sfx.playClick();
    setAuthState(!isAuthenticated);
    showToast(isAuthenticated 
      ? (currentLang === 'vi' ? 'Chế độ Demo: Giao diện Đặc Vụ' : 'Demo Mode: Operative View')
      : (currentLang === 'vi' ? 'Chế độ Demo: Giao diện Khách' : 'Demo Mode: Guest View')
    );
  });

  // Minimize / restore demo tool
  btnDemoMinimize.addEventListener('click', () => {
    demoInnerPanel.classList.add('hidden');
    btnDemoRestore.classList.remove('hidden');
  });

  btnDemoRestore.addEventListener('click', () => {
    demoInnerPanel.classList.remove('hidden');
    btnDemoRestore.classList.add('hidden');
  });

  // Logouts
  [btnLogout, btnHeroLogout].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick();
        setAuthState(false);
        showToast(currentLang === 'vi' ? 'Đã đăng xuất khỏi cổng tài khoản' : 'Signed out from D4C Portal');
      });
    }
  });

  // ==========================================================================
  // PRIMARY AUTH: STEAM OPENID FLOW
  // ==========================================================================
  btnSteamPrimary.addEventListener('click', (e) => {
    e.preventDefault();
    sfx.playClick();
    steamAuthModal.classList.remove('hidden');
  });

  closeSteamModal.addEventListener('click', () => {
    sfx.playClick();
    steamAuthModal.classList.add('hidden');
  });

  btnConfirmSteamLogin.addEventListener('click', () => {
    sfx.playSuccess();
    steamAuthModal.classList.add('hidden');
    setAuthState(true, 'Ghost_Sniper99');
    showToast(currentLang === 'vi' ? 'Đăng nhập Steam OpenID thành công!' : 'Steam OpenID verification successful!');
  });

  // ==========================================================================
  // SECONDARY AUTH: D4C ACCOUNT LOGIN FORM
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

    if (!username) {
      sfx.playError();
      loginErrorMsg.textContent = currentLang === 'vi' 
        ? 'Vui lòng nhập tên đăng nhập hoặc email D4C.' 
        : 'Please enter your D4C username or email.';
      loginErrorMsg.classList.remove('hidden');
      userInput.focus();
      return;
    }

    if (!password) {
      sfx.playError();
      loginErrorMsg.textContent = currentLang === 'vi' 
        ? 'Vui lòng nhập mật khẩu tài khoản D4C.' 
        : 'Please enter your account password.';
      loginErrorMsg.classList.remove('hidden');
      passwordInput.focus();
      return;
    }

    // Loading State
    btnSubmitLogin.disabled = true;
    loginSpinner.classList.remove('hidden');
    sfx.playClick();

    setTimeout(() => {
      btnSubmitLogin.disabled = false;
      loginSpinner.classList.add('hidden');

      sfx.playSuccess();
      setAuthState(true, username);
      showToast(currentLang === 'vi' 
        ? `Đăng nhập thành công với tài khoản [${username}]` 
        : `Signed in successfully as [${username}]`
      );
    }, 550);
  });

  // ==========================================================================
  // D4C REGISTRATION & FORGOT PASSWORD MODALS
  // ==========================================================================
  function openAuthModal(targetTab = 'tab-signup') {
    sfx.playClick();
    authModal.classList.remove('hidden');
    switchAuthTab(targetTab);
  }

  btnTriggerRegister.addEventListener('click', () => openAuthModal('tab-signup'));
  linkForgotPass.addEventListener('click', (e) => {
    e.preventDefault();
    openAuthModal('tab-forgot');
  });

  closeAuthModal.addEventListener('click', () => {
    sfx.playClick();
    authModal.classList.add('hidden');
  });

  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
      sfx.playClick();
      authModal.classList.add('hidden');
    }
  });

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

  // Disposable Email Verification Engine
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

  function validateEmailQuality(email) {
    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return { 
        valid: false, 
        error: currentLang === 'vi' ? 'Định dạng email không hợp lệ.' : 'Invalid email format.' 
      };
    }
    const domain = trimmed.split('@')[1];
    if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
      return { 
        valid: false, 
        error: currentLang === 'vi' 
          ? `Từ chối email rác (@${domain}). Vui lòng dùng Gmail hoặc email chính thức.` 
          : `Disposable email (@${domain}) rejected. Use a verified permanent inbox.` 
      };
    }
    return { valid: true };
  }

  let generatedRegCode = null;
  btnSendCode.addEventListener('click', () => {
    const email = signupEmail.value.trim();
    if (!email) {
      signupEmail.focus();
      return;
    }
    const check = validateEmailQuality(email);
    emailValidationMsg.classList.remove('hidden');

    if (!check.valid) {
      sfx.playError();
      emailValidationMsg.className = 'email-validation-msg error';
      emailValidationMsg.textContent = `⚠️ ${check.error}`;
      return;
    }

    sfx.playSuccess();
    generatedRegCode = Math.floor(100000 + Math.random() * 900000).toString();
    emailValidationMsg.className = 'email-validation-msg success';
    emailValidationMsg.textContent = currentLang === 'vi'
      ? `✓ Đã gửi mã xác minh tới [${email}] -> MÃ TEST: [${generatedRegCode}]`
      : `✓ Verification code dispatched to [${email}] -> CODE: [${generatedRegCode}]`;

    let cooldown = 60;
    btnSendCode.disabled = true;
    btnSendCode.textContent = `${cooldown}S`;
    const cdTimer = setInterval(() => {
      cooldown--;
      if (cooldown <= 0) {
        clearInterval(cdTimer);
        btnSendCode.disabled = false;
        btnSendCode.textContent = currentLang === 'vi' ? 'GỬI MÃ' : 'SEND CODE';
      } else {
        btnSendCode.textContent = `${cooldown}S`;
      }
    }, 1000);
  });

  function checkPasswordMatch() {
    const p1 = signupPassword.value;
    const p2 = signupRetypePassword.value;
    if (!p2) {
      passwordMatchMsg.classList.add('hidden');
      return;
    }
    passwordMatchMsg.classList.remove('hidden');
    if (p1 === p2) {
      passwordMatchMsg.className = 'password-match-msg success';
      passwordMatchMsg.textContent = currentLang === 'vi' ? '✓ Mật khẩu trùng khớp' : '✓ Passwords match';
    } else {
      passwordMatchMsg.className = 'password-match-msg error';
      passwordMatchMsg.textContent = currentLang === 'vi' ? '✗ Mật khẩu không khớp' : '✗ Passwords do not match';
    }
  }

  signupPassword.addEventListener('input', checkPasswordMatch);
  signupRetypePassword.addEventListener('input', checkPasswordMatch);

  formModalSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('signup-username').value.trim();
    const pass = signupPassword.value;
    const retype = signupRetypePassword.value;
    const code = document.getElementById('signup-code').value.trim();

    if (pass !== retype) {
      alert(currentLang === 'vi' ? 'Mật khẩu nhập lại không khớp!' : 'Passwords do not match!');
      return;
    }
    if (!generatedRegCode || code !== generatedRegCode) {
      alert(currentLang === 'vi' ? 'Mã xác minh không chính xác!' : 'Invalid verification code!');
      return;
    }

    sfx.playSuccess();
    authModal.classList.add('hidden');
    userInput.value = user;
    passwordInput.value = pass;
    showToast(currentLang === 'vi' ? `Đăng ký thành công đặc vụ [${user}]!` : `Operative [${user}] registered successfully!`);
    setAuthState(true, user);
  });

  btnForgotSendCode.addEventListener('click', () => {
    const acc = forgotAccount.value.trim();
    if (!acc) return;
    sfx.playSuccess();
    forgotValidationMsg.classList.remove('hidden');
    forgotValidationMsg.className = 'email-validation-msg success';
    const resetCode = Math.floor(100000 + Math.random() * 900000);
    forgotValidationMsg.textContent = currentLang === 'vi'
      ? `✓ Đã gửi mã khôi phục tới [${acc}] -> MÃ TEST: [${resetCode}]`
      : `✓ Recovery code sent to [${acc}] -> CODE: [${resetCode}]`;
  });

  formModalForgot.addEventListener('submit', (e) => {
    e.preventDefault();
    sfx.playSuccess();
    authModal.classList.add('hidden');
    showToast(currentLang === 'vi' ? 'Đã đặt lại mật khẩu thành công!' : 'Password reset successfully!');
  });

  // Support Modal
  [btnSupport, linkFooterSupport, linkJoinDiscord].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sfx.playClick();
        supportModal.classList.remove('hidden');
      });
    }
  });

  closeSupportModal.addEventListener('click', () => {
    sfx.playClick();
    supportModal.classList.add('hidden');
  });

  // ==========================================================================
  // OPERATIVE DASHBOARD: DAILY CHECK-IN REWARD CLAIM
  // ==========================================================================
  btnClaimCheckin.addEventListener('click', () => {
    if (checkinClaimed) return;
    sfx.playSuccess();
    checkinClaimed = true;
    currentStreak = 6;

    daySlot5.classList.remove('ready-to-claim');
    daySlot5.classList.add('claimed');
    daySlot5.querySelector('.day-status-pill').textContent = '✓';
    daySlot5.querySelector('.day-status-pill').className = 'day-status-pill claimed-pill';

    checkinStreakPill.textContent = '6 / 7 DAYS';
    dashStreakCount.textContent = `🔥 6 ${currentLang === 'vi' ? 'NGÀY' : 'DAYS'}`;

    btnClaimCheckin.disabled = true;
    btnClaimCheckin.textContent = currentLang === 'vi' ? '✓ ĐÃ NHẬN TIẾP TẾ HÔM NAY' : '✓ TODAY\'S SUPPLY CLAIMED';

    checkinSuccessMsg.classList.remove('hidden');
    checkinSuccessMsg.textContent = currentLang === 'vi'
      ? '✓ Tiếp tế thành công! 1x Giáp Chiến Thuật (Armor Pack) đã được gửi vào hòm đồ in-game.'
      : '✓ Supply delivered! 1x Tactical Armor Pack has been dispatched to your in-game vault.';

    showToast(currentLang === 'vi' ? 'Điểm danh thành công! +Armor Pack' : 'Check-in claimed! +Armor Pack');
  });

  // Promo code redemption
  const VALID_PROMO_CODES = {
    'CYBER2026': { rewardEn: '500 D4C Credits + 1x Neon Weapon Blueprint', rewardVi: '500 D4C Credits + 1x Bản vẽ vũ khí Neon' },
    'OP_STRIKE': { rewardEn: '3-Day 2x Battle EXP Booster', rewardVi: 'Thẻ nhân đôi kinh nghiệm 3 ngày' }
  };

  formRedeemCode.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = promoCodeInput.value.trim().toUpperCase();
    redeemFeedback.classList.remove('hidden');

    if (!code) {
      sfx.playError();
      redeemFeedback.className = 'redeem-feedback error';
      redeemFeedback.textContent = currentLang === 'vi' ? 'Vui lòng nhập mã code.' : 'Please enter a promo code.';
      return;
    }

    if (VALID_PROMO_CODES[code]) {
      sfx.playSuccess();
      redeemFeedback.className = 'redeem-feedback success';
      const prize = currentLang === 'vi' ? VALID_PROMO_CODES[code].rewardVi : VALID_PROMO_CODES[code].rewardEn;
      redeemFeedback.textContent = currentLang === 'vi' 
        ? `✓ Kích hoạt thành công [${code}]! Nhận: ${prize}` 
        : `✓ Promo [${code}] activated! Received: ${prize}`;
      promoCodeInput.value = '';
    } else {
      sfx.playError();
      redeemFeedback.className = 'redeem-feedback error';
      redeemFeedback.textContent = currentLang === 'vi'
        ? `✗ Mã code [${code}] không hợp lệ hoặc đã hết hạn.`
        : `✗ Promo code [${code}] is invalid or expired.`;
    }
  });

  // Platform connect buttons
  ['btn-link-twitch', 'btn-link-discord'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick();
        btn.textContent = currentLang === 'vi' ? 'ĐÃ KẾT NỐI' : 'LINKED';
        btn.disabled = true;
        btn.style.background = '#00c853';
        btn.style.color = '#000000';
        showToast(currentLang === 'vi' ? 'Đã liên kết tài khoản thành công!' : 'Platform linked successfully!');
      });
    }
  });
});
