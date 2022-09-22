import Service from '@ember/service';
import {
  Haptics as NativeHaptics,
  ImpactStyle,
  NotificationType,
} from '@capacitor/haptics';
import { tracked } from '@glimmer/tracking';

export { ImpactStyle, NotificationType };

export default class Haptics extends Service {
  @tracked isVibrating: boolean = false;

  async impact(style: ImpactStyle): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.impact({ style });
    } finally {
      this.isVibrating = false;
    }
  }

  async notification(type: NotificationType): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.notification({ type });
    } finally {
      this.isVibrating = false;
    }
  }

  async vibrate(duration: number = 300): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.vibrate({ duration });
    } finally {
      this.isVibrating = false;
    }
  }

  async selectionStart(): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.selectionStart();
    } finally {
      this.isVibrating = false;
    }
  }

  async selectionChanged(): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.selectionChanged();
    } finally {
      this.isVibrating = false;
    }
  }

  async selectionEnd(): Promise<void> {
    try {
      this.isVibrating = true;
      await NativeHaptics.selectionEnd();
    } finally {
      this.isVibrating = false;
    }
  }
}
