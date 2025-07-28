const langMeta = {
	'zh-TW': {
		codePageBit: 20, // 繁體中文
		codeRangeBit: null,
		type: 'cjk',
		string: '繁體中文',
		sampleTexts: {
			'基本文字': ['我能吞下玻璃而不傷身體。', '南去經三國，東來過五湖。'],
			'台文（漢字、台羅）': ['三日無餾，𬦰上樹。', 'Sann ji̍t bô liū, peh-tsiūnn tshiū.'],
			'日文': ['私は体を傷つけなくガラスを食べられます。'],
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
			'日文': ['私は体を傷つけなくガラスを食べられます。'],
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
			'일본어': ['私は体を傷つけなくガラスを食べられます。'],
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
			'Lao / ພາສາລາວ': ['ຂອ້ຍກິນແກ້ວໄດ້ໂດຍທີ່ມັນບໍ່ໄດ້ເຮັດໃຫ້ຂອ້ຍເຈັບ.', 'ພາສາລາວເປັນພາສາໃນຄອມເພື່ອນໃຕ້ ແລະ ມີອັກສອນເນື້ອໃນ.'],
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
			'English': ['I can eat glass and it doesn’t hurt me.', 'The quick brown fox jumps over the lazy dog.', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'],
			'French': ['J’peux bouffer du verre ça m’fait pas mal', 'Le français est une langue romane parlée principalement en France.'],
			'German': ['Ich kann Glas essen, ohne mir zu schaden.', 'Der schnelle, braune Fuchs springt über den faulen Hund.'],
			'Spanish': ['Puedo comer vidrio, no me hace daño.', 'El niño está jugando en el jardín bajo el cálido sol.'],
		}
	},
};