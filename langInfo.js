const fchckr = {
	unihan: {'zh-TW': 'Unicode漢字', 'ja': 'Unicode漢字', 'zh': 'Unicode汉字', 'ko': 'Unicode한자', 'en': 'Unicode CJK Ideographs'},
	unifiedCJK: {'zh-TW': '統合漢字', 'ja': '統合漢字', 'zh': '统合汉字', 'ko': '통합한자', 'en': 'CJK Ideographs'},
	extended: {'zh-TW': '漢字擴展', 'ja': '漢字拡張', 'zh': '汉字扩展', 'ko': '한자확장', 'en': 'Extension '},
	compatible: {'zh-TW': '相容漢字', 'ja': '互換漢字', 'zh': '兼容汉字', 'ko': '호환용한자', 'en': 'Compatibility'},
	compatibleExt: {'zh-TW': '相容漢字擴展', 'ja': '互換漢字拡張', 'zh': '兼容汉字扩展', 'ko': '호환용확장', 'en': 'Compatibility Supplement'},
	existsTitle: {'zh-TW': '包含', 'ja': '収録', 'zh': '包含', 'ko': '포함', 'en': 'Existing'},
	missTitle: {'zh-TW': '缺少', 'ja': '欠落', 'zh': '缺少', 'ko': '누락', 'en': 'Missing'},
	customText: {'zh-TW': '請輸入要顯示的文字：', 'ja': '表示する文字を入力してください：', 'zh': '请输入要显示的文字：', 'ko': '표시할 문자를 입력하세요：', 'en': 'Enter the text to display:'},
	customCaption: {'zh-TW': '自訂範例', 'ja': 'カスタムサンプル', 'zh': '自定义文本', 'ko': '사용자 정의 샘플', 'en': 'Custom Sample'},
	sum: {'zh-TW': '總計', 'ja': '合計', 'zh': '总计', 'ko': '합계', 'en': 'Total'},
	glyphCount: {'zh-TW': '字符', 'ja': 'グリフ', 'zh': '字形', 'ko': '글리프', 'en': 'glyphs'},
	charCount: {'zh-TW': '字碼', 'ja': '文字', 'zh': '字符', 'ko': '문자', 'en': 'characters'},

	version: {'zh-TW': '版本：', 'ja': 'バージョン：', 'zh': '版本：', 'ko': '버전：', 'en': 'Version: '},
	manufacturer: {'zh-TW': '廠商：', 'ja': 'ベンダー：', 'zh': '厂商：', 'ko': '제작사：', 'en': 'Vendor: '},
	designer: {'zh-TW': '設計者：', 'ja': 'デザイナー：', 'zh': '设计者：', 'ko': '디자이너：', 'en': 'Designer: '},
	license: {'zh-TW': '授權：', 'ja': 'ライセンス：', 'zh': '授权：', 'ko': '라이선스：', 'en': 'License: '},
	copyright: {'zh-TW': '著作權：', 'ja': '著作権：', 'zh': '版权：', 'ko': '저작권：', 'en': 'Copyright: '},
	//failedToMakeSamples: {'zh-TW': '無法產生範例', 'ja': 'サンプル生成に失敗', 'zh': '无法生成样本', 'ko': '샘플 생성 실패', 'en': 'Failed to generate samples'},
};

const langMeta = {
	'zh-TW': {
		codePageBit: 20, // 繁體中文
		codeRangeBit: null,
		type: 'cjk',
		string: '繁體中文',
		sampleTexts: {
			'基本文字': ['我能吞下玻璃而不傷身體。', '南去經三國，東來過五湖。'],
			'台文（漢字、台羅）': ['我誠𠢕食玻璃，嘛袂著傷。', 'Guá tsiânn gâu tsia̍h po-lê, mā bē tio̍h-siong.'],
			'日文': ['私は体を傷つけずにガラスを食べられます。'],
			'命名罕用字': ['珢㚬㛄㛢㨗㶈㷍㼈䕒䭲祜祤禇禑禔'],
			'蘇州碼': ['〇〡〢〣〤〥〦〧〨〩'],
			'方音符號': ['ㆠㆣㄫㆢㆡㆤㆥㆦㆧㆨㆩ', 'ㆪㆫㆬㆭㆮㆯㆰㆱㆲㆴㆵㆻㆷˋˊ˪˫']
		}
	},
	'ja': {
		codePageBit: 17, // 日文
		codeRangeBit: null,
		type: 'cjk',
		string: '日本語',
		sampleTexts: {
			'基本文字': ['あのイーハトーヴォのすきとおった風、', '夏でも底に冷たさをもつ青いそら、', 'うつくしい森で飾られたモリーオ市、', '郊外のぎらぎらひかる草の波。'],
			'機種依存文字': ['髙﨑彅咊靖鉎館哿喆㈱①㌔㍍㍻ｱｦﾝ'],
			'ivs-adobe@@IVS（Adobe-Japan1 CID）': ['邊󠄀邊󠄁邊󠄂邊󠄃邊󠄄邊󠄅邊󠄆邊󠄇', '邉󠄀邉󠄁邉󠄂邉󠄃邉󠄄邉󠄅邉󠄆邉󠄇邉󠄈邉󠄉邉󠄊邉󠄋邉󠄌邉󠄍邉󠄎'],
			'ivs-hanyo@@IVS（汎用電子情報交換環境整備プログラム）': ['邊󠄈邊󠄉邊󠄊邊󠄋邊󠄌邊󠄍邊󠄎邊󠄏邊󠄐', '邉󠄏邉󠄐邉󠄑邉󠄒邉󠄓邉󠄔邉󠄕邉󠄖邉󠄗邉󠄘邉󠄙邉󠄚邉󠄛邉󠄜']
		}
	},
	'zh': {
		codePageBit: 18, // 簡體中文
		codeRangeBit: null,
		type: 'cjk',
		string: '简体中文',
		sampleTexts: {
			'基本文字': ['我能吞下玻璃而不伤身体。'],
			'日文': ['私は体を傷つけずにガラスを食べられます。'],
		}
	},
	'ko': {
		codePageBit: 19, // 韓文
		codeRangeBit: null,
		type: 'cjk',
		string: '한국어',
		sampleTexts: {
			'기본 문자': ['나는 유리를 먹을 수 있어요. 그래도 아프지 않아요.', '가나다라마바사아자차카타파하', '한국어는 한글로 쓰여진다.'],
			'한자 한글': ['日常生活과 敎育 目的을 爲해 따로', '選定한 漢字를 常用漢字라고 부른다.'],
			'일본어': ['私は体を傷つけずにガラスを食べられます。'],
		}
	},
	'th': {
		codePageBit: 16,
		unicodeRangeBit: 24,
		type: null,
		string: 'ภาษาไทย',
		sampleTexts: {
			'Thai / ภาษาไทย': ['ฉันกินกระจกได้', 'แต่มันไม่ทำให้ฉันเจ็บ', 'ภาษาไทยเป็นภาษาที่มีเอกลักษณ์เฉพาะตัว'],
		}
	},
	'lo': {
		codePageBit: null,
		unicodeRangeBit: 25,
		type: null,
		string: 'ພາສາລາວ',
		sampleTexts: {
			'Lao / ພາສາລາວ': ['ຂອ້ຍກິນແກ້ວໄດ້ໂດຍທີ່ມັນບໍ່ໄດ້ເຮັດໃຫ້ຂອ້ຍເຈັບ.', 'ພາສາລາວເປັນພາສາໃນຄອມເພື່ອນໃຕ້ ແລະ ມີອັກສອນເນື້ອໃນ.'],
		}
	},
	'vi': {
		codePageBit: 8,
		unicodeRangeBit: null,
		type: 'latin',
		string: 'Tiếng Việt',
		sampleTexts: {
			'Vietnamese / Tiếng Việt': ['Tôi có thể ăn thủy tinh mà không hại gì.', 'Tiếng Việt là ngôn ngữ chính thức của Việt Nam.'],
		}
	},
	'lo': {
		codePageBit: null,
		unicodeRangeBit: 25,
		type: null,
		string: 'ພາສາລາວ',
		sampleTexts: {
			'Lao / ພາສາລາວ': ['ຂອ້ຍກິນແກ້ວໄດ້ໂດຍທີ່ມັນບໍ່ໄດ້ເຮັດໃຫ້ຂອ້ຍເຈັບ', 'ພາສາລາວເປັນພາສາໃນຄອມເພື່ອນໃຕ້ ແລະ ມີອັກສອນເນື້ອໃນ'],
		}
	},
	'km': {
		codePageBit: null,
		unicodeRangeBit: 80,
		type: null,
		string: 'ភាសាខ្មែរ',
		sampleTexts: {
			'Khmer / ភាសាខ្មែរ': ['ខ្ញុំអាចញុំកញ្ចក់បាន ដោយគ្មានបញ្ហារ', 'ភាសាខ្មែរមានអក្សរដែលមានលក្ខណៈពិសេស។'],
		}
	},
	'my': {
		codePageBit: null,
		unicodeRangeBit: 74,
		type: null,
		string: 'မြန်မာဘာသာ',
		sampleTexts: {
			'Burmese / မြန်မာဘာသာ': ['ကျွန်တော် ကျွန်မ မှန်စားနိုင်တယ်။ ၎င်းကြောင့် ထိခိုက်မှုမရှိပါ။', 'မြန်မာစာသည်အထူးသဖြင့်အက္ခရာများပါဝင်သည်။'],
		}
	},
	'ar': {
		codePageBit: 6,
		unicodeRangeBit: 51,
		type: 'arabic',
		string: 'العربية',
		sampleTexts: {
			'Arabic / العربية': ['أنا قادر على أكل الزجاج و هذا لا يؤلمني', 'اللغة العربية هي لغة سامية تستخدم في العديد من الدول'],
		}
	},
	'hi': {
		codePageBit: null,
		unicodeRangeBit: 15,
		type: 'indian',
		string: 'हिन्दी',
		sampleTexts: {
			'Hindi / हिन्दी': ['मैं काँच खा सकता हूँ और मुझे उससे कोई चोट नहीं पहुंचती.', 'हिन्दी भारत की एक प्रमुख भाषा है।'],
		}
	},
	'ta': {
		codePageBit: null,
		unicodeRangeBit: 20,
		type: 'indian',
		string: 'தமிழ்',
		sampleTexts: {
			'Tamil / தமிழ்': ['நான் கண்ணாடி சாப்பிடுவேன்', 'அதனால் எனக்கு ஒரு கேடும் வராது.', 'தமிழ் இந்தியாவின் ஒரு முக்கிய மொழி.'],
		}
	},
	'bn': {
		codePageBit: null,
		unicodeRangeBit: 14,
		type: 'indian',
		string: 'বাংলা',
		sampleTexts: {
			'Bengali / বাংলা': ['আমি কাঁচ খেতে পারি এবং এতে আমার কোনো ক্ষতি হয় না।', 'বাংলা ভাষা ভারত ও বাংলাদেশের একটি প্রধান ভাষা।'],
		}
	},
	'he': {
		codePageBit: 5,
		unicodeRangeBit: 11,
		type: null,
		string: 'עברית',
		sampleTexts: {
			'Hebrew / עברית': ['אני יכול לאכול זכוכית וזה לא מזיק לי', 'עברית היא שפה שמית המדוברת בעיקר בישראל.'],
		}
	},
	'bo': {
		codePageBit: null,
		unicodeRangeBit: 70,
		type: 'tibetan',
		string: 'བོད་ཡིག',
		sampleTexts: {
			'Tibetan / བོད་ཡིག': ['ཤེལ་སྒོ་ཟ་ནས་ང་ན་གི་མ་རེད།', 'སྐད་ཡིག་བོད་ཡིག་པ།'],
		}
	},
	'el': {
		codePageBit: 3,
		unicodeRangeBit: 7,
		type: 'latin',
		string: 'Greek',
		sampleTexts: {
			'Greek / ελληνικά': ['Μπορώ να φάω σπασμένα γυαλιά χωρίς να πάθω τίποτα.', 'Αλφαβητικό σύστημα γραφής της Ελληνικής γλώσσας'],
		}
	},
	'ru': {
		codePageBit: 2,
		unicodeRangeBit: 9,
		type: 'latin',
		string: 'Русский',
		sampleTexts: {
			'Russian / Русский': ['Я могу есть стекло, оно мне не вредит.', 'Русский алфавит и кириллица'],
		}
	},
	'en': {
		codePageBit: 0,
		unicodeRangeBit: 0,
		type: 'latin',
		string: 'Latin',
		sampleTexts: {
			'English': ['I can eat glass and it doesn’t hurt me.', 'The quick brown fox jumps over the lazy dog.'],
			'French': ['J’peux bouffer du verre ça m’fait pas mal', 'Le français est une langue romane parlée principalement en France.'],
			'German': ['Ich kann Glas essen, ohne mir zu schaden.', 'Der schnelle, braune Fuchs springt über den faulen Hund.'],
			'Spanish': ['Puedo comer vidrio, no me hace daño.', 'El niño está jugando en el jardín bajo el cálido sol.'],
		}
	},
};