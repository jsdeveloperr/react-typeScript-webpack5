# React + TypeScript + Webpack 5+ + Movies Project

<p align="center">
    <img src="https://github.com/jsdeveloperr/react-typeScript-webpack5/blob/main/src/assets/movies.jpg" width="500" alt="React TypeScript Webpack 5+ Movies Project" />
</p>

Bu proje, film verilerini listeleyen, kullanıcıların favori filmlerini yönetmesine olanak tanıyan bir React uygulamasıdır. Geliştirme ve üretim ortamları için webpack5+ kullanılarak yapılandırılmıştır.

## 🚀 Gereksinimler

- **Node.js** ve **npm/yarn**
- **json-server** ve **yarn** paketlerinin global olarak yüklenmesi gerekmektedir.

### 🚀 Global Yükleme Komutları

Aşağıdaki komutlarla `json-server` ve `yarn` paketlerini global olarak yükleyebilirsiniz:

```bash
npm install -g json-server
npm install -g yarn
```

## 🚀 Projeyi Çalıştırma Komutları ve Kurulum

Proje dosyalarını klonladıktan sonra gerekli bağımlılıkları yüklemek için aşağıdaki komutları çalıştırın:

1. Projeyi klonla:

   ```bash
   git clone https://github.com/jsdeveloperr/react-typeScript-webpack5.git
   cd react-typeScript-webpack5
   ```

2. Tüm bağımlılıkları yükleyin:

   ```bash
   yarn install
   ```

3. Geliştirme ortamında projeyi başlatmak için:

   ```bash
   yarn dev
   ```

   Bu komut hem uygulamayı (`localhost:3000`), hem de JSON sunucusunu (`localhost:3001`) başlatır.

4. Üretim için projeyi derlemek için:

   ```bash
   yarn build
   ```

### 🚀 Geliştirme Ortamı

Aşağıdaki komutlar geliştirme sırasında kullanılabilir:

- **`yarn dev`**: Uygulamayı ve JSON sunucusunu aynı anda çalıştırır. Webpack ve JSON Server için paralel bir geliştirme ortamı sağlar.
- **`yarn start`**: Yalnızca webpack dev sunucusunu başlatır. Uygulamanın geliştirme modunda çalışmasını sağlar.
- **`yarn start:server`**: JSON Server'ı başlatır ve `db.json` dosyasındaki verileri sunar.

### 🚀 Üretim Ortamı

Üretim için optimize edilmiş bir yapı oluşturmak için aşağıdaki komutu çalıştırabilirsiniz:

```bash
yarn build
```

Bu komut, `dist` klasöründe minify edilmiş ve optimize edilmiş dosyaları oluşturur.

## 🧞 Proje Yapısı

- **`src/`**: Uygulamanın temel kaynak kodlarını içerir.
- **`src/components/`**: Tekrar kullanılabilir React bileşenlerini içerir.
- **`src/pages/`**: Her bir sayfa bileşenini barındırır.
- **`src/layouts/`**: Sayfa düzenlerini içeren bileşenler.
- **`src/context/`**: React Context API ile yönetilen global durum yönetimi dosyalarını içerir.
- **`_data/db.json`**: JSON Server tarafından kullanılan sahte API verilerini içerir.
- **`webpack.config.js`**: Webpack yapılandırmasını içeren dosya.

## 🧞 Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **React Router**: Sayfalar arası geçiş sağlamak için.
- **React Hook Form**: Form yönetimi ve doğrulama işlemleri için.
- **Yup**: Form doğrulama işlemleri için.
- **Axios**: API isteklerini yönetmek için.
- **JSON Server**: Yerel bir API sunucusu olarak kullanılır.
- **Webpack**: Uygulama dosyalarını paketlemek için.

### 🧞 Ana Bağımlılıklar

- **React ve React DOM**: `^18.3.1` sürümü
- **React Hook Form**: `^7.53.1`
- **React Router DOM**: `^6.27.0`
- **Axios**: `^1.7.7`
- **Yup**: `^1.4.0`

### 🧞 Geliştirme Bağımlılıkları

- **Webpack**: `^5.96.1` (Webpack CLI ve Webpack Dev Server dahil)
- **Sass ve Sass Loader**: `^1.80.6` ve `^16.0.3`
- **ts-loader**: TypeScript için gerekli
- **HTML Webpack Plugin**: HTML dosyasını webpack ile yapılandırmak için
- **Concurrently**: JSON Server ve webpack dev sunucusunu aynı anda çalıştırmak için

## 🧞 Geliştirici Notları

- **Bağlantı Noktaları**: JSON Server, `3001` portunda çalışır, uygulama ise `3000` portunda çalışır.
- **Proje Tarayıcı Uyumluluğu**: Proje, `browserslist` ayarlarına göre modern tarayıcılar için optimize edilmiştir.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır.




