import React from 'react';
import { DefaultFocus } from '../../../../lib/src/spatial-navigation/context/DefaultFocusContext';
import { Button } from '../../design-system/components/Button';
import { Spacer } from '../../design-system/components/Spacer';
import { Modal } from './Modal';
import { useAudioLanguage } from '../AudioLanguageContext';

interface AudioSettingsModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
}

export const AudioSettingsModal = ({
  isModalVisible,
  setIsModalVisible,
}: AudioSettingsModalProps) => {
  const { setAudioLanguage } = useAudioLanguage();

  return (
    <Modal
      isModalVisible={isModalVisible}
      hideModal={() => setIsModalVisible(false)}
      title={'Choose audio language'}
    >
      <DefaultFocus>
        <Button
          label="English"
          onSelect={() => {
            setAudioLanguage('English');
            setIsModalVisible(false);
          }}
        />
      </DefaultFocus>
      <Spacer gap="$8" />
      <Button
        label="Spanish"
        onSelect={() => {
          setAudioLanguage('Spanish');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="Portuguese"
        onSelect={() => {
          setAudioLanguage('Portuguese');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="None"
        onSelect={() => {
          setAudioLanguage('None');
          setIsModalVisible(false);
        }}
      />
    </Modal>
  );
};
