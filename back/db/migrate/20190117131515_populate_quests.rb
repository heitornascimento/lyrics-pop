class PopulateQuests < ActiveRecord::Migration[5.2]
  def up
    Quest.create! [
      {
        question: "Samba, na cara da inimiga vai\nSamba, desfila com as amiga vai\nSamba, na cara da inimiga vai\nSamba, desfila com as amiga",
        options: 'Zeca pagodinho;Jojô Toddynho;Tom Zé;Valesca Popozuda',
        answer_idx: 1
      },

      {
       question: "Amar, amei\n
                     Gostar, gostei\n
                     Mas agora eu não quero\n
                     Nem de graça",
       options: 'MC Jhonatan;MC Brinquedo;MC Loma e As Gêmeas Lacração;Mc Don Juan',
       answer_idx: 3
      },

      {
        question: "Punhos cerrados, olhos fechados\nE eu levanto a mão pro alto e grito\nVem comigo quem é do bonde pesadão!",
        options: 'Sofia;Iza;Ingrid;Mariana',
        answer_idx: 1
      },

      {
        question: "We're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy",
        options: 'Justin Bieber;Michael Jackson;The Killers;Rick Astley',
        answer_idx: 3
      },
      {
        question: "E aê, DG?\nEscama só de peixe\nUaai!\nCebruthius",
        options: 'MC Loma e As Gêmeas Lacração;MC Bruthius;Furacão 2000;MC Henrique',
        answer_idx: 0
      }
    ]
  end

  def down
    Quest.destroy_all
  end
end
