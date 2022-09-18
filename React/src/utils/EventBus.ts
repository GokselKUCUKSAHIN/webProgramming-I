export type EventListener = (event: any, ...args: any[]) => void;

export class EventBus {
    private eventListeners: Map<string, EventListener[]>;

    private constructor(private name: number | string | undefined) {
        this.eventListeners = new Map<string, EventListener[]>();
    }

    public on(eventName: string, event: EventListener): void {
        if (!this.eventListeners.has(eventName)) {
            this.eventListeners.set(eventName, []);
        }
        this.eventListeners.get(eventName)?.push(event);
    }

    public off(eventName: string, event: EventListener): boolean {
        if (this.eventListeners.has(eventName)) {
            const eventListeners = this.eventListeners.get(eventName) ?? [];
            const index = eventListeners?.indexOf(event) ?? -1;
            if (index !== -1) {
                const beforeSize = eventListeners.length;
                eventListeners.splice(index, 1);
                return beforeSize - eventListeners.length === 1;
            }
        }
        return false;
    }

    public emit(eventName: string, event?: any, ...args: any[]) {
        if (this.eventListeners.has(eventName)) {
            const eventListeners = this.eventListeners.get(eventName) ?? [];
            for (let eventListener of eventListeners) {
                eventListener(event, args);
            }
        }
    }

    static create(name: number | string | undefined) {
        return new EventBus(name);
    }
}