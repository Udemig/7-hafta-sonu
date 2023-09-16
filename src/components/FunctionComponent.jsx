import React, { useEffect, useState } from "react";
import CustomButton from "./Button/Button";
import { buttonTypes } from "./Button/buttonTypes";
const FunctionComponent = () => {
  const [sayac, setSayac] = useState(2);
  const [showButton, setShowButton] = useState(true);

  /**
 *     Function Componentlerde Yaşam Döngülerine Ulaşmak için
 * useEffect hooks kullanılır
 * useEffect bizim componentDidMount componentDidUpdate componentDidUnmount 
 * anlarını yakalar
 * 

 **useEffect hooksunu kullanmak için aşamalar

1-useEffect react üzerinden import edilecek
2- aşama useEffect kullanma amacını belirleme 
  
  **eğer componentDidMount anını yakalamak isteniyorsa

  useEffect(()=>{},[])



   ** eğer componentDidUpdate anıını yakalamak isteniyor

   useEffect(()=>{})


   ** eğer özel bir durum değişikliğindeki componenDidUpdate anı yakalanmak istenirse

   useEffect(()=>{},[yakalanmakIstnenOzelDurm])

 */

  //componentDidMount anını yakalamk için (Yani Component Ekrana Basıldığı An)

  //Örnek Kullanıldığı API istekleri,Kullanıcını Giriş Yapıp Yapmadığını Sorgulanması
  useEffect(() => {
    console.log("componentDidMount anı yakalandı");
  }, []);

  //componentDidUpdate anını yakalamak için (Yani Componentin Statelerinde  bir değişiklik
  //olduğunda çalışır.Herhangi Bir Özel Durum Gözetmez)
  useEffect(() => {
    console.log("componentDidUpdate anı yakalandı");
  });

  //componentDidUpdate anını yakalamak için (Farklı yanı özel bir durum bağımlığı var
  //birden fazla bağımlılık eklenebilir)
  useEffect(() => {
    console.log("İkincil Sayac değişti");
  if(sayac <0){
    setShowButton(false)
  }else{
    setShowButton(true)
  }
  }, [sayac]);

  //ComponentdidUnMount
  useEffect(() => {
    console.log("component ekrana geldi");

    return () => {
      console.log("Ekrandan gitti");
    };
  }, []);

  const sayaciDegistir = (islem) => {
    let count;
    if (islem === "arttir") {
      count = sayac + 1;
      setSayac(count);
    } else if (islem === "azalt") {
      count = sayac - 1;
      setSayac(count);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "10rem",
      }}
    >
      <div
        style={{
          color: "orange",
          fontSize: "45px",
          fontWeight: "800",
        }}
      >
        Sayaç Değeri
      </div>

      <h1
        style={{
          fontSize: "50px",
          color: sayac < 0 ? "red" : "green",
        }}
      >
        {sayac}
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          gap: "10px",
        }}
      >
        {showButton == true ? (
          <CustomButton
            title={"Azalat"}
            type={buttonTypes.DECREMENT_LARGE}
            onClick={() => sayaciDegistir("azalt")}
          />
        ) : null}

        <CustomButton
          title={"Arttır"}
          type={buttonTypes.INCREMENT_LARGE}
          onClick={() => sayaciDegistir("arttir")}
        />
      </div>
    </div>
  );
};

export default FunctionComponent;
