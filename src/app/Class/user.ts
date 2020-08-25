export class User {
  private userId: string;
  private displayName: string;
  private photoUrl: string;

  setUserId = (userId: string) => {
    if (userId === null || userId === undefined) return;
    this.userId = userId;
  };
  getUserId = (): string => {
    return this.userId;
  };
  setDisplayName = (displayName: string) => {
    if (displayName === null || displayName === undefined) return;
    this.displayName = displayName;
  };
  getDisplayName = (): string => {
    return this.displayName;
  };
  setPhotoUrl = (photoUrl: string) => {
    if (photoUrl === null || photoUrl === undefined) return;
    this.photoUrl = photoUrl;
  };
  getPhotoUrl = (): string => {
    return this.photoUrl;
  };
}
