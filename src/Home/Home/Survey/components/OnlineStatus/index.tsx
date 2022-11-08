import { FC } from 'react';
import Sample from 'models/sample';
import { IonSpinner, IonChip, IonButton } from '@ionic/react';
import { observer } from 'mobx-react';
import './styles.scss';

interface Props {
  sample: Sample;
  onUpload: (e?: any) => void;
  uploadIsPrimary?: boolean;
}

const UsersSurveys: FC<Props> = ({ onUpload, sample, uploadIsPrimary }) => {
  const { saved } = sample.metadata;
  const { synchronising } = sample.remote;
  const isDisabled = sample.isUploaded();

  if (!saved) {
    return (
      <IonChip color="dark" class="survey-status ion-text-wrap">
        Draft
      </IonChip>
    );
  }

  if (synchronising) return <IonSpinner class="survey-status" />;

  if (isDisabled) return null;

  return (
    <IonButton
      className="survey-status survey-status-upload"
      onClick={onUpload}
      fill={uploadIsPrimary ? undefined : 'outline'}
    >
      Upload
    </IonButton>
  );
};

export default observer(UsersSurveys);