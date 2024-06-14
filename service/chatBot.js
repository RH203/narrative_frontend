import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export default async function responseBot(message) {
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [{ text: "Apa itu Narrative?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Narrative adalah website yang menyediakan novel gratis.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu web novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Web novel adalah novel yang diterbitkan secara online, biasanya dalam format serial, sering kali di situs web atau platform khusus.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Bagaimana web novel berbeda dari novel tradisional?" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Web novel biasanya diserialkan, dengan bab dirilis secara berkala, dan sering kali gratis atau menggunakan model berlangganan, sementara novel tradisional diterbitkan sebagai buku lengkap.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa platform populer untuk web novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Platform populer untuk web novel termasuk Wattpad, Webnovel, Royal Road, dan Scribble Hub.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Siapa saja penulis web novel terkenal?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Beberapa penulis web novel terkenal termasuk Er Gen, I Eat Tomatoes, dan TJSS.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa genre yang paling umum dalam web novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Genre yang paling umum dalam web novel termasuk fantasi, romansa, aksi, petualangan, dan fiksi ilmiah.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara menulis web novel yang baik?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk menulis web novel yang baik, penting untuk memiliki plot yang menarik, karakter yang berkembang dengan baik, dan jadwal penerbitan yang konsisten.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Bagaimana cara menarik pembaca untuk web novel saya?" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk menarik pembaca, gunakan sinopsis yang menarik, sampul yang menarik, dan promosikan novel Anda di media sosial serta komunitas pembaca.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu light novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Light novel adalah jenis novel yang ditulis dalam gaya yang ringan dan sering kali disertai ilustrasi, umumnya ditujukan untuk pembaca muda.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa perbedaan antara light novel dan web novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Perbedaan utama adalah light novel biasanya diterbitkan dalam bentuk cetak dan memiliki ilustrasi, sementara web novel diterbitkan secara online dan biasanya tidak memiliki ilustrasi.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu isekai?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Isekai adalah genre di mana karakter utama dipindahkan ke dunia lain, sering kali dengan elemen fantasi.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara membuat karakter yang menarik?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk membuat karakter yang menarik, berikan mereka latar belakang yang mendalam, motivasi yang jelas, dan perkembangan karakter yang realistis.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa yang dimaksud dengan plot twist?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Plot twist adalah perubahan mendadak dan tak terduga dalam alur cerita yang mengubah pemahaman pembaca tentang narasi.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara membuat plot twist yang efektif?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Plot twist yang efektif membutuhkan penempatan petunjuk yang halus dan menciptakan kejutan yang tetap logis dalam konteks cerita.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu cliffhanger?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Cliffhanger adalah akhir cerita atau bab yang meninggalkan pembaca dalam ketegangan, menunggu kelanjutan cerita.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara membuat cliffhanger yang baik?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Cliffhanger yang baik menimbulkan rasa penasaran dan antisipasi, tanpa membuat pembaca merasa frustasi.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu world-building?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "World-building adalah proses menciptakan dunia fiktif yang mendetail dan konsisten untuk latar cerita.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Bagaimana cara melakukan world-building yang efektif?" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "World-building yang efektif melibatkan penciptaan aturan, budaya, sejarah, dan geografi yang konsisten dalam dunia fiktif.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu trope dalam fiksi?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Trope adalah elemen, tema, atau konvensi umum dalam fiksi yang sering kali berulang dalam berbagai karya.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa saja trope umum dalam web novel?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Trope umum dalam web novel termasuk 'isekai', 'OP MC' (karakter utama yang sangat kuat), dan 'harem'.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara menghindari trope yang klise?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk menghindari trope yang klise, coba tambahkan sentuhan unik atau twist pada elemen yang sudah ada, dan fokus pada pengembangan karakter yang mendalam.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu antihero?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Antihero adalah karakter utama yang memiliki sifat atau tindakan yang biasanya tidak sesuai dengan standar moral atau heroik konvensional.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Bagaimana cara menulis antihero yang menarik?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk menulis antihero yang menarik, berikan mereka motivasi yang kuat dan sifat yang kompleks, serta tunjukkan sisi manusiawi mereka.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu character development?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Character development adalah proses di mana karakter dalam cerita mengalami perubahan atau pertumbuhan seiring dengan perkembangan plot.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Mengapa character development penting?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Character development penting karena membantu pembaca terhubung dengan karakter dan membuat cerita lebih mendalam dan realistis.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu plot armor?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Plot armor adalah istilah yang digunakan ketika karakter utama tampak tidak mungkin terluka atau gagal karena kebutuhan plot cerita.",
          },
        ],
      },
      {
        role: "user",
        parts: [
          { text: "Bagaimana cara menghindari plot armor yang berlebihan?" },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Untuk menghindari plot armor yang berlebihan, berikan tantangan nyata dan konsekuensi bagi karakter utama, serta biarkan mereka mengalami kegagalan atau kerugian.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu deus ex machina?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Deus ex machina adalah perangkat naratif di mana masalah cerita tiba-tiba diselesaikan oleh kejadian atau karakter yang tidak dijelaskan sebelumnya.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Mengapa deus ex machina sering dianggap buruk?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Deus ex machina sering dianggap buruk karena dapat terasa seperti penyelesaian yang malas atau tidak memuaskan, dan bisa merusak kepercayaan pembaca terhadap cerita.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apa itu prolog?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Prolog adalah bagian pendahuluan dalam cerita yang memberikan latar belakang atau konteks sebelum plot utama dimulai.",
          },
        ],
      },
      {
        role: "user",
        parts: [{ text: "Apakah prolog selalu diperlukan?" }],
      },
      {
        role: "model",
        parts: [
          {
            text: "Prolog tidak selalu diperlukan. Mereka sebaiknya digunakan jika memberikan informasi penting yang meningkatkan pemahaman pembaca tentang cerita.",
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(message);
  // console.log(result.response.text());
  return result.response.text();
}
