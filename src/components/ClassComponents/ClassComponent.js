import { Component } from "react";

class Sayac extends Component {
  //Kurucu Metod
  constructor(props) {
    //Miras almaya yarayan metod
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Constructor Çalıştı");
  }

  //Component Ekrana Basıldığı anda çalışır
  componentDidMount() {
    console.log("Component Did Mount Çalıştı");
  }
  //Componentin state ide bir değişiklik olduğunda çalışır
  componentDidUpdate() {
    console.log("Component Did Update Çalıştı");
  }
  //Component Ekrandan silinirken çalışır
  componentWillUnmount() {
    console.log("Component Did Update Çalıştı");
  }

  sayacDegistir(islem) {
    if (islem === "Azalt") {
      this.setState({ count: this.state.count - 1 });
    } else if (islem === "Arttir") {
      this.setState({ count: this.state.count + 1 });
    } else {
    }
  }

  //Componenti Ekrana Basar
  render() {
    console.log("Render Çalıştı");
    return (
      <div>
        <p>Sayacın Şuanki Değeri {this.state.count}</p>
        <button onClick={() => this.sayacDegistir("Arttir")}>
          Sayacı Attır
        </button>
        <button onClick={() => this.sayacDegistir("Azalt")}>
          Sayacı Azalt
        </button>
      </div>
    );
  }
}

export default Sayac;
