import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import { BlueHeaderDefaultSub } from '../../BlueComponents';
import loc from '../../loc';
import { BlueStorageContext } from '../../blue_modules/storage-context';
import ListItem from '../../components/ListItem';
import { useExtendedNavigation } from '../../hooks/useExtendedNavigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: Platform.select({
    android: {
      paddingTop: 50,
    },
    default: undefined,
  }),
});

const Settings = () => {
  const { navigate } = useExtendedNavigation();
  // By simply having it here, it'll re-render the UI if language is changed
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { language } = useContext(BlueStorageContext);

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.container}
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustContentInsets
    >
      {Platform.OS === 'android' ? <BlueHeaderDefaultSub leftText={loc.settings.header} /> : <></>}
      <ListItem title={loc.settings.general} onPress={() => navigate('GeneralSettings')} testID="GeneralSettings" chevron />
      <ListItem title={loc.settings.currency} onPress={() => navigate('Currency')} testID="Currency" chevron />
      <ListItem title={loc.settings.language} onPress={() => navigate('Language')} testID="Language" chevron />
      <ListItem title={loc.settings.encrypt_title} onPress={() => navigate('EncryptStorage')} testID="SecurityButton" chevron />
      <ListItem title={loc.settings.network} onPress={() => navigate('NetworkSettings')} testID="NetworkSettings" chevron />
      <ListItem title={loc.settings.tools} onPress={() => navigate('Tools')} testID="Tools" chevron />
      <ListItem title={loc.settings.about} onPress={() => navigate('About')} testID="AboutButton" chevron />
    </ScrollView>
  );
};

export default Settings;
