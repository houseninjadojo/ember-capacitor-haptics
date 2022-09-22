import Service from '@ember/service';
import { ImpactStyle, NotificationType } from '@capacitor/haptics';
export default class Haptics extends Service {
    impact(style: ImpactStyle): Promise<void>;
    notification(type: NotificationType): Promise<void>;
    vibrate(duration?: number): Promise<void>;
    selectionStart(): Promise<void>;
    selectionChanged(): Promise<void>;
    selectionEnd(): Promise<void>;
}
//# sourceMappingURL=haptics.d.ts.map