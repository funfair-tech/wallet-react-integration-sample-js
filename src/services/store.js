// for ease of the example i have just used subjects here, a bigger more complex app should probably use a store framework like redux
import { BehaviorSubject } from 'rxjs';

export const isAuthenticated$ = new BehaviorSubject(false);
export const restoreAuthenticationTaskCompleted$ = new BehaviorSubject(false);
