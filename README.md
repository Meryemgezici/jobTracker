<h1>Job Tracker</h1>
 
1.Popüler Filmler ve Kategoriler: Uygulama, popüler filmleri ve kategorileri Redux ile yönetilen bir veri deposunda (store) saklar.

2.Ana Sayfa: Uygulamanın ana sayfası, Netflix'in ana sayfasına benzer şekilde popüler filmleri ve kategorileri gösterir. Popüler filmler en üstte görüntülenir ve kullanıcılara hızlı bir şekilde erişim sağlar.

3.Film Detayları: Kullanıcılar popüler filmlerden birine tıkladığında, filmin detaylarının bulunduğu bir sayfaya yönlendirilirler. Bu sayfada genellikle film başlığı, açıklaması ve derecelendirme gibi detaylar yer alır. 

4.Kategoriye Göre Film Listesi: Kategorilere ait filmlerin listesi görüntülenir. Bu liste, kullanıcının belirli bir türdeki filmleri bulmasını kolaylaştırır.



 <h2>Kullanılan Teknolojiler</h2>
  Bu sitede SASS, Vite, React.js(Redux, Redux-Toolkit,useState,useEffect,React Router Dom,axios,useDispatch,useSelector,useNavigate,,json-server,uuid,react-icons) teknolojileri kullanıldı.

<h3>Ekran Görüntüsü</h3> -->

 ![](project.gif)

Bu iş ekleme projesi yaptım.Bu projeyi react ile yaptım ve bu projede redux toolkit kullandım. bu projede kullanıcı işe girdiği pozisyonu,şirketi,lokasyonu,durum ve türünü girerek işi ekliyor. Daha sonra bu eklediği işler JobList sayfasında gösteriliyor. Kullanıcı buradan hangi işten red yemiş hangi iş başvuru devam ediyor hangisi staj hangisi tam zamanlı bunları ekleyip job list sayfasında görebiliyor. Kullanıcı işi eklediğinde react toastify kullanarak kullanıcıya bildirim gösterdim. Aynı zamanda formu tam doldurmadığında veya eklediğinde bildirim verdim. aynı zamnda iş ekle formundaki verileri axios post kullanrak db.json verisini güncelledim.Aynı zamnda json-server ile api oluşturdum.
