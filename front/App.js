import React, { Fragment } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const QUESTIONS = [
  {
    id: 0,
    description: "Samba, na cara da inimiga vai\nSamba, desfila com as amiga vai\nSamba, na cara da inimiga vai\nSamba, desfila com as amiga",
    answers: [
      'Zeca pagodinho',
      'Jojô Toddynho',
      'Tom Zé',
      'Valesca Popozuda'
    ],
    correct_answer: 1
  },

  {
   id: 1,
   description: "Amar, amei\nGostar, gostei\nMas agora eu não quero\nNem de graça",
   answers: [
     'MC Jhonatan',
     'MC Brinquedo',
     'MC Loma e As Gêmeas Lacração',
     'Mc Don Juan'
   ],
   correct_answer: 3
  },

  {
    id: 2,
    description: "Punhos cerrados, olhos fechados\nE eu levanto a mão pro alto e grito\nVem comigo quem é do bonde pesadão!",
    answers: [
      'Sofia',
      'Iza',
      'Ingrid',
      'Mariana'
    ],
    correct_answer: 1
  },

  {
    id: 3,
    description: "We are no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy",
    answers: [
      'Justin Bieber',
      'Michael Jackson',
      'The Killers',
      'Rick Astley'
    ],
    correct_answer: 3
  },
  {
    id: 4,
    description: "E aê, DG?\nEscama só de peixe\nUaai!\nCebruthius",
    answers: [
      'MC Loma e As Gêmeas Lacração',
      'MC Bruthius',
      'Furacão 2000',
      'MC Henrique'
    ],
    correct_answer: 0
  }
]

export default class App extends React.Component {
  state = {
    selectedIndex: null,
    submitted: null,
    activeQuestion: 0,
    score: 0,
  }
  
  handleSelection = index => {
    this.setState({ selectedIndex: index  })
  }

  renderCorrentAnswer = () => {
    if (this.state.submitted === QUESTIONS[this.state.activeQuestion].correct_answer) {
      return (
        <View style={[ styles.resultContainer, { backgroundColor: 'green' } ]}>
          <Text style={{ color: '#fff' }}>CORRECT ANSWER 😃</Text>
        </View>
      )
    } else if (this.state.submitted !== QUESTIONS[this.state.activeQuestion].correct_answer && this.state.submitted !== null) {
      return (
        <View style={[ styles.resultContainer, { backgroundColor: 'red' } ]}>
          <Text style={{ color: '#fff' }}>WRONG ANSWER 😫</Text>
        </View>
      )
    } else {
      return (
        <View style={[ styles.resultContainer, { backgroundColor: '#fff' } ]} />
      )
    }
  }

  handleSubmit = () => {
   this.setState({ submitted: this.state.selectedIndex })

   if (this.state.activeQuestion !== QUESTIONS.length) {
     setTimeout(() => this.setState(prevState => ({
        activeQuestion: prevState.activeQuestion + 1,
        submitted: null,
        selectedIndex: null
      })), 2000)
   }
  }

  render() {
    if (this.state.activeQuestion > QUESTIONS.length - 1) {
      return (
        <Fragment>
          <StatusBar />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 48 }}>FINISH!! 🎉</Text>
            <TouchableOpacity style={{ marginTop: 32 }}>
              <Text>🔙</Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <StatusBar />
          <View style={[ styles.progressIndicator, { width: '100%' } ]}/>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>LyricsPOP 🎤🎵</Text>
            </View>

            <Text style={styles.lyrics}>
              {QUESTIONS[this.state.activeQuestion].description}
            </Text>
            
            <View style={styles.selectorsContainer}>
              <TouchableOpacity
                style={[styles.button, { borderRadius: 4, backgroundColor: this.state.selectedIndex === 0 ? "blue" : "white", borderBottomWidth: 2, borderBottomColor: 'blue' }]}
                onPress={() => this.handleSelection(0)}
              >
                <Text style={{ color: this.state.selectedIndex === 0 ? "white" : "black" }}>
                  {QUESTIONS[this.state.activeQuestion].answers[0]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { borderRadius: 4, backgroundColor: this.state.selectedIndex === 1 ? "blue" : "white", borderBottomWidth: 2, borderBottomColor: 'blue' }]}
                onPress={() => this.handleSelection(1)}
              >
                <Text style={{ color: this.state.selectedIndex === 1 ? "white" : "black" }}>
                  {QUESTIONS[this.state.activeQuestion].answers[1]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { borderRadius: 4, backgroundColor: this.state.selectedIndex === 2 ? "blue" : "white", borderBottomWidth: 2, borderBottomColor: 'blue' }]}
                onPress={() => this.handleSelection(2)}
              >
                <Text style={{ color: this.state.selectedIndex === 2 ? "white" : "black" }}>
                  {QUESTIONS[this.state.activeQuestion].answers[2]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, { borderRadius: 4, backgroundColor: this.state.selectedIndex === 3 ? "blue" : "white" }]}
                onPress={() => this.handleSelection(3)}
              >
                <Text style={{ color: this.state.selectedIndex === 3 ? "white" : "black" }}>
                  {QUESTIONS[this.state.activeQuestion].answers[3]}
                </Text>
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.sendButton} onPress={this.handleSubmit}>
              <Text style={styles.sendButtonText}>CHECK!</Text>
            </TouchableOpacity>

            {this.renderCorrentAnswer()}
          </View>
        </Fragment>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    paddingTop: 16,
    marginTop: 48,
    fontSize: 32,
  },
  lyrics: {
    margin: 16,
    fontSize: 24,
  },
  selectorsContainer: {
    borderColor: 'blue',
    width: '90%',
    borderWidth: 2,
    borderRadius: 8,
  },
  button: {
    padding: 12,
  },
  buttonText: {
    fontSize: 16,
  },
  sendButton: {
    marginTop: 32,
    paddingVertical: 24,
    paddingHorizontal: 48,
    backgroundColor: 'blue',
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff'
  },
  resultContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    padding: 12,
    width: '100%',
  },
  progressIndicator: {
    marginTop: 24,
    height: 4,
    backgroundColor: 'blue',
  }
});
