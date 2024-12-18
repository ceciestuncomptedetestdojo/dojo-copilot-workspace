import { DefaultFocus } from '../../../../lib/src/spatial-navigation/context/DefaultFocusContext';
import { Button } from '../../design-system/components/Button';
import { Spacer } from '../../design-system/components/Spacer';
import { Modal } from './Modal';
import { useAudioLanguage } from '../AudioLanguageContext';

interface SubtitlesModalProps {
  isModalVisible: boolean;
  setIsModalVisible: (isVisible: boolean) => void;
  setSubtitles: (subtitles: string) => void;
}

export const SubtitlesModal = ({
  isModalVisible,
  setIsModalVisible,
  setSubtitles,
}: SubtitlesModalProps) => {
  const { setAudioLanguage } = useAudioLanguage();

  return (
    <Modal
      isModalVisible={isModalVisible}
      hideModal={() => setIsModalVisible(false)}
      title={'Choose subtitles'}
    >
      <DefaultFocus>
        <Button
          label="English"
          onSelect={() => {
            setSubtitles('English');
            setAudioLanguage('English');
            setIsModalVisible(false);
          }}
        />
      </DefaultFocus>
      <Spacer gap="$8" />
      <Button
        label="Spanish"
        onSelect={() => {
          setSubtitles('Spanish');
          setAudioLanguage('Spanish');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="Portuguese"
        onSelect={() => {
          setSubtitles('Portuguese');
          setAudioLanguage('Portuguese');
          setIsModalVisible(false);
        }}
      />
      <Spacer gap="$8" />
      <Button
        label="None"
        onSelect={() => {
          setSubtitles('No');
          setAudioLanguage('None');
          setIsModalVisible(false);
        }}
      />
    </Modal>
  );
};
