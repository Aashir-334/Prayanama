import React, {Component} from 'react';
import {
  PowerTranslator,
  ProviderTypes,
  TranslatorConfiguration,
  TranslatorFactory,
} from 'react-native-power-translator';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

export default class Language extends Component {
  constructor() {
    super();
    this.state = {languageCode: 'en'};
  }
  changeLang(lang) {
    const trans = TranslatorFactory.createTranslator();
    trans.translate('Hello my name is sana').then(res => {
      console.log(res);
    });
  }
  render() {
    const styles = this.getStyles();
    TranslatorConfiguration.setConfig(
      ProviderTypes.Google,
      'AIzaSyBfY-OGCu3SLixBW3cEMpj470aBNn6F4dE',
      this.state.languageCode,
    );

    return (
      <ScrollView style={styles.container}>
        <View style={styles.languageBar}>
          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => {
              this.changeLang('en');
            }}>
            <Text style={styles.p}>Englifvsh</Text>
          </TouchableOpacity>
          <TouchableOpacity
           activeOpacity={0.7}
            onPress={() => {
              this.changeLanguage('fr');
            }}>
            <Text style={styles.p}>French</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.changeLanguage('ru');
            }}>
            <Text style={styles.p}>Russian</Text>
          </TouchableOpacity>
          <TouchableOpacity
           activeOpacity={0.7}
            onPress={() => {
              this.changeLanguage('de');
            }}>
            <Text style={styles.p}>German</Text>
          </TouchableOpacity>
        </View>
        <View>
          <PowerTranslator
            style={styles.title}
            text={'A Confucian Revival Began'}
          />
          <PowerTranslator
            style={styles.subtitle}
            text={'Author: Confucianism'}
          />
        </View>

        <View style={styles.section}>
          <PowerTranslator
            style={styles.p}
            text={
              'Confucianism was particularly strong during the Han Dynasty, whose greatest thinker was Dong Zhongshu, who integrated Confucianism with the thoughts of the Zhongshu School and the theory of the Five Elements. He also was a promoter of the New Text school, which considered Confucius as a divine figure and a spiritual ruler of China, who foresaw and started the evolution of the world towards the Universal Peace.'
            }
          />
        </View>

        <View style={styles.section}>
          <PowerTranslator
            style={styles.p}
            text={
              'Confucianism was particularly strong during the Han Dynasty, whose greatest thinker was Dong Zhongshu, who integrated Confucianism with the thoughts of the Zhongshu School and the theory of the Five Elements. He also was a promoter of the New Text school, which considered Confucius as a divine figure and a spiritual ruler of China, who foresaw and started the evolution of the world towards the Universal Peace.'
            }
          />
        </View>

        <View style={styles.section}>
          <PowerTranslator
            style={styles.p}
            text={
              'Engineering physics or engineering science refers to the study of the combined disciplines of physics'
            }
          />
        </View>
      </ScrollView>
    );
  }

  getStyles() {
    return {
      container: {
        padding: 40,
        backgroundColor: '#FAFAFA',
      },
      section: {
        marginTop: 15,
        marginBottom: 15,
      },
      title: {
        marginTop: 80,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 38,
        lineHeight: 38,
      },
      subtitle: {
        color: '#B3B3B3',
      },
      p: {
        color: '#828280',
        lineHeight: 24,
      },
      languageBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      languageBarItem: {
        color: '#828280',
      },
    };
  }

  changeLanguage(languageCode) {
    this.setState({languageCode: languageCode});
  }
}
