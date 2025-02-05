declare global {
    function __dispatch(m: Method, route: string, uri: string, path: [string, string][], headers: [string, string][], user: UserType | undefined, body: Uint8Array): Promise<ResponseType>;
    var rustyscript: {
        functions: any;
        async_functions: any;
    };
}
declare namespace Deno {
    interface ReadFileOptions {
        /**
         * An abort signal to allow cancellation of the file read operation.
         * If the signal becomes aborted the readFile operation will be stopped
         * and the promise returned will be rejected with an AbortError.
         */
        signal?: AbortSignal;
    }
    interface WriteFileOptions {
        /** If set to `true`, will append to a file instead of overwriting previous
         * contents.
         *
         * @default {false} */
        append?: boolean;
        /** Sets the option to allow creating a new file, if one doesn't already
         * exist at the specified path.
         *
         * @default {true} */
        create?: boolean;
        /** If set to `true`, no file, directory, or symlink is allowed to exist at
         * the target location. When createNew is set to `true`, `create` is ignored.
         *
         * @default {false} */
        createNew?: boolean;
        /** Permissions always applied to file. */
        mode?: number;
        /** An abort signal to allow cancellation of the file write operation.
         *
         * If the signal becomes aborted the write file operation will be stopped
         * and the promise returned will be rejected with an {@linkcode AbortError}.
         */
        signal?: AbortSignal;
    }
    /**
     * Options which can be set when using {@linkcode Deno.makeTempDir},
     * {@linkcode Deno.makeTempDirSync}, {@linkcode Deno.makeTempFile}, and
     * {@linkcode Deno.makeTempFileSync}.
     *
     * @category File System */
    interface MakeTempOptions {
        /** Directory where the temporary directory should be created (defaults to
         * the env variable `TMPDIR`, or the system's default, usually `/tmp`).
         *
         * Note that if the passed `dir` is relative, the path returned by
         * `makeTempFile()` and `makeTempDir()` will also be relative. Be mindful of
         * this when changing working directory. */
        dir?: string;
        /** String that should precede the random portion of the temporary
         * directory's name. */
        prefix?: string;
        /** String that should follow the random portion of the temporary
         * directory's name. */
        suffix?: string;
    }
    /**
     * Options which can be set when using {@linkcode Deno.mkdir} and
     * {@linkcode Deno.mkdirSync}.
     *
     * @category File System */
    interface MkdirOptions {
        /** If set to `true`, means that any intermediate directories will also be
         * created (as with the shell command `mkdir -p`).
         *
         * Intermediate directories are created with the same permissions.
         *
         * When recursive is set to `true`, succeeds silently (without changing any
         * permissions) if a directory already exists at the path, or if the path
         * is a symlink to an existing directory.
         *
         * @default {false} */
        recursive?: boolean;
        /** Permissions to use when creating the directory (defaults to `0o777`,
         * before the process's umask).
         *
         * Ignored on Windows. */
        mode?: number;
    }
    /**
     * Information about a directory entry returned from {@linkcode Deno.readDir}
     * and {@linkcode Deno.readDirSync}.
     *
     * @category File System */
    interface DirEntry {
        /** The file name of the entry. It is just the entity name and does not
         * include the full path. */
        name: string;
        /** True if this is info for a regular file. Mutually exclusive to
         * `DirEntry.isDirectory` and `DirEntry.isSymlink`. */
        isFile: boolean;
        /** True if this is info for a regular directory. Mutually exclusive to
         * `DirEntry.isFile` and `DirEntry.isSymlink`. */
        isDirectory: boolean;
        /** True if this is info for a symlink. Mutually exclusive to
         * `DirEntry.isFile` and `DirEntry.isDirectory`. */
        isSymlink: boolean;
    }
    /**
     * Options which can be set when doing {@linkcode Deno.open} and
     * {@linkcode Deno.openSync}.
     *
     * @category File System */
    interface OpenOptions {
        /** Sets the option for read access. This option, when `true`, means that
         * the file should be read-able if opened.
         *
         * @default {true} */
        read?: boolean;
        /** Sets the option for write access. This option, when `true`, means that
         * the file should be write-able if opened. If the file already exists,
         * any write calls on it will overwrite its contents, by default without
         * truncating it.
         *
         * @default {false} */
        write?: boolean;
        /** Sets the option for the append mode. This option, when `true`, means
         * that writes will append to a file instead of overwriting previous
         * contents.
         *
         * Note that setting `{ write: true, append: true }` has the same effect as
         * setting only `{ append: true }`.
         *
         * @default {false} */
        append?: boolean;
        /** Sets the option for truncating a previous file. If a file is
         * successfully opened with this option set it will truncate the file to `0`
         * size if it already exists. The file must be opened with write access
         * for truncate to work.
         *
         * @default {false} */
        truncate?: boolean;
        /** Sets the option to allow creating a new file, if one doesn't already
         * exist at the specified path. Requires write or append access to be
         * used.
         *
         * @default {false} */
        create?: boolean;
        /** If set to `true`, no file, directory, or symlink is allowed to exist at
         * the target location. Requires write or append access to be used. When
         * createNew is set to `true`, create and truncate are ignored.
         *
         * @default {false} */
        createNew?: boolean;
        /** Permissions to use if creating the file (defaults to `0o666`, before
         * the process's umask).
         *
         * Ignored on Windows. */
        mode?: number;
    }
    /**
     * Options which can be set when using {@linkcode Deno.remove} and
     * {@linkcode Deno.removeSync}.
     *
     * @category File System */
    interface RemoveOptions {
        /** If set to `true`, path will be removed even if it's a non-empty directory.
         *
         * @default {false} */
        recursive?: boolean;
    }
    /** Options that can be used with {@linkcode symlink} and
     * {@linkcode symlinkSync}.
     *
     * @category File System */
    interface SymlinkOptions {
        /** Specify the symbolic link type as file, directory or NTFS junction. This
         * option only applies to Windows and is ignored on other operating systems. */
        type: "file" | "dir" | "junction";
    }
    function writeFile(path: string | URL, data: Uint8Array | ReadableStream<Uint8Array>, options?: WriteFileOptions): Promise<void>;
    function writeTextFile(path: string | URL, data: string | ReadableStream<string>, options?: WriteFileOptions): Promise<void>;
    function readTextFile(path: string | URL, options?: ReadFileOptions): Promise<string>;
    function readFile(path: string | URL, options?: ReadFileOptions): Promise<Uint8Array>;
    function chmod(path: string | URL, mode: number): Promise<void>;
    function chown(path: string | URL, uid: number | null, gid: number | null): Promise<void>;
    function cwd(): string;
    function makeTempDir(options?: MakeTempOptions): Promise<string>;
    function makeTempFile(options?: MakeTempOptions): Promise<string>;
    function mkdir(path: string | URL, options?: MkdirOptions): Promise<void>;
    function chdir(directory: string | URL): void;
    function copyFile(fromPath: string | URL, toPath: string | URL): Promise<void>;
    function readDir(path: string | URL): AsyncIterable<DirEntry>;
    function readLink(path: string | URL): Promise<string>;
    function realPath(path: string | URL): Promise<string>;
    function remove(path: string | URL, options?: RemoveOptions): Promise<void>;
    function rename(oldpath: string | URL, newpath: string | URL): Promise<void>;
    function stat(path: string | URL): Promise<FileInfo>;
    function lstat(path: string | URL): Promise<FileInfo>;
    function truncate(name: string, len?: number): Promise<void>;
    function open(path: string | URL, options?: OpenOptions): Promise<FsFile>;
    function create(path: string | URL): Promise<FsFile>;
    function symlink(oldpath: string | URL, newpath: string | URL, options?: SymlinkOptions): Promise<void>;
    function link(oldpath: string, newpath: string): Promise<void>;
    function utime(path: string | URL, atime: number | Date, mtime: number | Date): Promise<void>;
    function umask(mask?: number): number;
    /** Provides information about a file and is returned by
     * {@linkcode Deno.stat}, {@linkcode Deno.lstat}, {@linkcode Deno.statSync},
     * and {@linkcode Deno.lstatSync} or from calling `stat()` and `statSync()`
     * on an {@linkcode Deno.FsFile} instance.
     *
     * @category File System
     */
    interface FileInfo {
        /** True if this is info for a regular file. Mutually exclusive to
         * `FileInfo.isDirectory` and `FileInfo.isSymlink`. */
        isFile: boolean;
        /** True if this is info for a regular directory. Mutually exclusive to
         * `FileInfo.isFile` and `FileInfo.isSymlink`. */
        isDirectory: boolean;
        /** True if this is info for a symlink. Mutually exclusive to
         * `FileInfo.isFile` and `FileInfo.isDirectory`. */
        isSymlink: boolean;
        /** The size of the file, in bytes. */
        size: number;
        /** The last modification time of the file. This corresponds to the `mtime`
         * field from `stat` on Linux/Mac OS and `ftLastWriteTime` on Windows. This
         * may not be available on all platforms. */
        mtime: Date | null;
        /** The last access time of the file. This corresponds to the `atime`
         * field from `stat` on Unix and `ftLastAccessTime` on Windows. This may not
         * be available on all platforms. */
        atime: Date | null;
        /** The creation time of the file. This corresponds to the `birthtime`
         * field from `stat` on Mac/BSD and `ftCreationTime` on Windows. This may
         * not be available on all platforms. */
        birthtime: Date | null;
        /** The last change time of the file. This corresponds to the `ctime`
         * field from `stat` on Mac/BSD and `ChangeTime` on Windows. This may
         * not be available on all platforms. */
        ctime: Date | null;
        /** ID of the device containing the file. */
        dev: number;
        /** Inode number.
         *
         * _Linux/Mac OS only._ */
        ino: number | null;
        /** The underlying raw `st_mode` bits that contain the standard Unix
         * permissions for this file/directory.
         */
        mode: number | null;
        /** Number of hard links pointing to this file.
         *
         * _Linux/Mac OS only._ */
        nlink: number | null;
        /** User ID of the owner of this file.
         *
         * _Linux/Mac OS only._ */
        uid: number | null;
        /** Group ID of the owner of this file.
         *
         * _Linux/Mac OS only._ */
        gid: number | null;
        /** Device ID of this file.
         *
         * _Linux/Mac OS only._ */
        rdev: number | null;
        /** Blocksize for filesystem I/O.
         *
         * _Linux/Mac OS only._ */
        blksize: number | null;
        /** Number of blocks allocated to the file, in 512-byte units.
         *
         * _Linux/Mac OS only._ */
        blocks: number | null;
        /**  True if this is info for a block device.
         *
         * _Linux/Mac OS only._ */
        isBlockDevice: boolean | null;
        /**  True if this is info for a char device.
         *
         * _Linux/Mac OS only._ */
        isCharDevice: boolean | null;
        /**  True if this is info for a fifo.
         *
         * _Linux/Mac OS only._ */
        isFifo: boolean | null;
        /**  True if this is info for a socket.
         *
         * _Linux/Mac OS only._ */
        isSocket: boolean | null;
    }
    /**
     * A enum which defines the seek mode for IO related APIs that support
     * seeking.
     *
     * @category I/O */
    enum SeekMode {
        Start = 0,
        Current = 1,
        End = 2
    }
    /** @category I/O */
    interface SetRawOptions {
        /**
         * The `cbreak` option can be used to indicate that characters that
         * correspond to a signal should still be generated. When disabling raw
         * mode, this option is ignored. This functionality currently only works on
         * Linux and Mac OS.
         */
        cbreak: boolean;
    }
    class FsFile implements Disposable {
        /** A {@linkcode ReadableStream} instance representing to the byte contents
         * of the file. This makes it easy to interoperate with other web streams
         * based APIs.
         *
         * ```ts
         * using file = await Deno.open("my_file.txt", { read: true });
         * const decoder = new TextDecoder();
         * for await (const chunk of file.readable) {
         *   console.log(decoder.decode(chunk));
         * }
         * ```
         */
        readonly readable: ReadableStream<Uint8Array>;
        /** A {@linkcode WritableStream} instance to write the contents of the
         * file. This makes it easy to interoperate with other web streams based
         * APIs.
         *
         * ```ts
         * const items = ["hello", "world"];
         * using file = await Deno.open("my_file.txt", { write: true });
         * const encoder = new TextEncoder();
         * const writer = file.writable.getWriter();
         * for (const item of items) {
         *   await writer.write(encoder.encode(item));
         * }
         * ```
         */
        readonly writable: WritableStream<Uint8Array>;
        /** Write the contents of the array buffer (`p`) to the file.
         *
         * Resolves to the number of bytes written.
         *
         * **It is not guaranteed that the full buffer will be written in a single
         * call.**
         *
         * ```ts
         * const encoder = new TextEncoder();
         * const data = encoder.encode("Hello world");
         * using file = await Deno.open("/foo/bar.txt", { write: true });
         * const bytesWritten = await file.write(data); // 11
         * ```
         *
         * @category I/O
         */
        write(p: Uint8Array): Promise<number>;
        /** Synchronously write the contents of the array buffer (`p`) to the file.
         *
         * Returns the number of bytes written.
         *
         * **It is not guaranteed that the full buffer will be written in a single
         * call.**
         *
         * ```ts
         * const encoder = new TextEncoder();
         * const data = encoder.encode("Hello world");
         * using file = Deno.openSync("/foo/bar.txt", { write: true });
         * const bytesWritten = file.writeSync(data); // 11
         * ```
         */
        writeSync(p: Uint8Array): number;
        /** Truncates (or extends) the file to reach the specified `len`. If `len`
         * is not specified, then the entire file contents are truncated.
         *
         * ### Truncate the entire file
         *
         * ```ts
         * using file = await Deno.open("my_file.txt", { write: true });
         * await file.truncate();
         * ```
         *
         * ### Truncate part of the file
         *
         * ```ts
         * // if "my_file.txt" contains the text "hello world":
         * using file = await Deno.open("my_file.txt", { write: true });
         * await file.truncate(7);
         * const buf = new Uint8Array(100);
         * await file.read(buf);
         * const text = new TextDecoder().decode(buf); // "hello w"
         * ```
         */
        truncate(len?: number): Promise<void>;
        /** Synchronously truncates (or extends) the file to reach the specified
         * `len`. If `len` is not specified, then the entire file contents are
         * truncated.
         *
         * ### Truncate the entire file
         *
         * ```ts
         * using file = Deno.openSync("my_file.txt", { write: true });
         * file.truncateSync();
         * ```
         *
         * ### Truncate part of the file
         *
         * ```ts
         * // if "my_file.txt" contains the text "hello world":
         * using file = Deno.openSync("my_file.txt", { write: true });
         * file.truncateSync(7);
         * const buf = new Uint8Array(100);
         * file.readSync(buf);
         * const text = new TextDecoder().decode(buf); // "hello w"
         * ```
         */
        truncateSync(len?: number): void;
        /** Read the file into an array buffer (`p`).
         *
         * Resolves to either the number of bytes read during the operation or EOF
         * (`null`) if there was nothing more to read.
         *
         * It is possible for a read to successfully return with `0` bytes. This
         * does not indicate EOF.
         *
         * **It is not guaranteed that the full buffer will be read in a single
         * call.**
         *
         * ```ts
         * // if "/foo/bar.txt" contains the text "hello world":
         * using file = await Deno.open("/foo/bar.txt");
         * const buf = new Uint8Array(100);
         * const numberOfBytesRead = await file.read(buf); // 11 bytes
         * const text = new TextDecoder().decode(buf);  // "hello world"
         * ```
         */
        read(p: Uint8Array): Promise<number | null>;
        /** Synchronously read from the file into an array buffer (`p`).
         *
         * Returns either the number of bytes read during the operation or EOF
         * (`null`) if there was nothing more to read.
         *
         * It is possible for a read to successfully return with `0` bytes. This
         * does not indicate EOF.
         *
         * **It is not guaranteed that the full buffer will be read in a single
         * call.**
         *
         * ```ts
         * // if "/foo/bar.txt" contains the text "hello world":
         * using file = Deno.openSync("/foo/bar.txt");
         * const buf = new Uint8Array(100);
         * const numberOfBytesRead = file.readSync(buf); // 11 bytes
         * const text = new TextDecoder().decode(buf);  // "hello world"
         * ```
         */
        readSync(p: Uint8Array): number | null;
        /** Seek to the given `offset` under mode given by `whence`. The call
         * resolves to the new position within the resource (bytes from the start).
         *
         * ```ts
         * // Given the file contains "Hello world" text, which is 11 bytes long:
         * using file = await Deno.open(
         *   "hello.txt",
         *   { read: true, write: true, truncate: true, create: true },
         * );
         * await file.write(new TextEncoder().encode("Hello world"));
         *
         * // advance cursor 6 bytes
         * const cursorPosition = await file.seek(6, Deno.SeekMode.Start);
         * console.log(cursorPosition);  // 6
         * const buf = new Uint8Array(100);
         * await file.read(buf);
         * console.log(new TextDecoder().decode(buf)); // "world"
         * ```
         *
         * The seek modes work as follows:
         *
         * ```ts
         * // Given the file contains "Hello world" text, which is 11 bytes long:
         * const file = await Deno.open(
         *   "hello.txt",
         *   { read: true, write: true, truncate: true, create: true },
         * );
         * await file.write(new TextEncoder().encode("Hello world"));
         *
         * // Seek 6 bytes from the start of the file
         * console.log(await file.seek(6, Deno.SeekMode.Start)); // "6"
         * // Seek 2 more bytes from the current position
         * console.log(await file.seek(2, Deno.SeekMode.Current)); // "8"
         * // Seek backwards 2 bytes from the end of the file
         * console.log(await file.seek(-2, Deno.SeekMode.End)); // "9" (i.e. 11-2)
         * ```
         */
        seek(offset: number | bigint, whence: SeekMode): Promise<number>;
        /** Synchronously seek to the given `offset` under mode given by `whence`.
         * The new position within the resource (bytes from the start) is returned.
         *
         * ```ts
         * using file = Deno.openSync(
         *   "hello.txt",
         *   { read: true, write: true, truncate: true, create: true },
         * );
         * file.writeSync(new TextEncoder().encode("Hello world"));
         *
         * // advance cursor 6 bytes
         * const cursorPosition = file.seekSync(6, Deno.SeekMode.Start);
         * console.log(cursorPosition);  // 6
         * const buf = new Uint8Array(100);
         * file.readSync(buf);
         * console.log(new TextDecoder().decode(buf)); // "world"
         * ```
         *
         * The seek modes work as follows:
         *
         * ```ts
         * // Given the file contains "Hello world" text, which is 11 bytes long:
         * using file = Deno.openSync(
         *   "hello.txt",
         *   { read: true, write: true, truncate: true, create: true },
         * );
         * file.writeSync(new TextEncoder().encode("Hello world"));
         *
         * // Seek 6 bytes from the start of the file
         * console.log(file.seekSync(6, Deno.SeekMode.Start)); // "6"
         * // Seek 2 more bytes from the current position
         * console.log(file.seekSync(2, Deno.SeekMode.Current)); // "8"
         * // Seek backwards 2 bytes from the end of the file
         * console.log(file.seekSync(-2, Deno.SeekMode.End)); // "9" (i.e. 11-2)
         * ```
         */
        seekSync(offset: number | bigint, whence: SeekMode): number;
        /** Resolves to a {@linkcode Deno.FileInfo} for the file.
         *
         * ```ts
         * import { assert } from "jsr:@std/assert";
         *
         * using file = await Deno.open("hello.txt");
         * const fileInfo = await file.stat();
         * assert(fileInfo.isFile);
         * ```
         */
        stat(): Promise<FileInfo>;
        /** Synchronously returns a {@linkcode Deno.FileInfo} for the file.
         *
         * ```ts
         * import { assert } from "jsr:@std/assert";
         *
         * using file = Deno.openSync("hello.txt")
         * const fileInfo = file.statSync();
         * assert(fileInfo.isFile);
         * ```
         */
        statSync(): FileInfo;
        /**
         * Flushes any pending data and metadata operations of the given file
         * stream to disk.
         *
         * ```ts
         * const file = await Deno.open(
         *   "my_file.txt",
         *   { read: true, write: true, create: true },
         * );
         * await file.write(new TextEncoder().encode("Hello World"));
         * await file.truncate(1);
         * await file.sync();
         * console.log(await Deno.readTextFile("my_file.txt")); // H
         * ```
         *
         * @category I/O
         */
        sync(): Promise<void>;
        /**
         * Synchronously flushes any pending data and metadata operations of the given
         * file stream to disk.
         *
         * ```ts
         * const file = Deno.openSync(
         *   "my_file.txt",
         *   { read: true, write: true, create: true },
         * );
         * file.writeSync(new TextEncoder().encode("Hello World"));
         * file.truncateSync(1);
         * file.syncSync();
         * console.log(Deno.readTextFileSync("my_file.txt")); // H
         * ```
         *
         * @category I/O
         */
        syncSync(): void;
        /**
         * Flushes any pending data operations of the given file stream to disk.
         *  ```ts
         * using file = await Deno.open(
         *   "my_file.txt",
         *   { read: true, write: true, create: true },
         * );
         * await file.write(new TextEncoder().encode("Hello World"));
         * await file.syncData();
         * console.log(await Deno.readTextFile("my_file.txt")); // Hello World
         * ```
         *
         * @category I/O
         */
        syncData(): Promise<void>;
        /**
         * Synchronously flushes any pending data operations of the given file stream
         * to disk.
         *
         *  ```ts
         * using file = Deno.openSync(
         *   "my_file.txt",
         *   { read: true, write: true, create: true },
         * );
         * file.writeSync(new TextEncoder().encode("Hello World"));
         * file.syncDataSync();
         * console.log(Deno.readTextFileSync("my_file.txt")); // Hello World
         * ```
         *
         * @category I/O
         */
        syncDataSync(): void;
        /**
         * Changes the access (`atime`) and modification (`mtime`) times of the
         * file stream resource. Given times are either in seconds (UNIX epoch
         * time) or as `Date` objects.
         *
         * ```ts
         * using file = await Deno.open("file.txt", { create: true, write: true });
         * await file.utime(1556495550, new Date());
         * ```
         *
         * @category File System
         */
        utime(atime: number | Date, mtime: number | Date): Promise<void>;
        /**
         * Synchronously changes the access (`atime`) and modification (`mtime`)
         * times of the file stream resource. Given times are either in seconds
         * (UNIX epoch time) or as `Date` objects.
         *
         * ```ts
         * using file = Deno.openSync("file.txt", { create: true, write: true });
         * file.utime(1556495550, new Date());
         * ```
         *
         * @category File System
         */
        utimeSync(atime: number | Date, mtime: number | Date): void;
        /** **UNSTABLE**: New API, yet to be vetted.
         *
         * Checks if the file resource is a TTY (terminal).
         *
         * ```ts
         * // This example is system and context specific
         * using file = await Deno.open("/dev/tty6");
         * file.isTerminal(); // true
         * ```
         */
        isTerminal(): boolean;
        /** **UNSTABLE**: New API, yet to be vetted.
         *
         * Set TTY to be under raw mode or not. In raw mode, characters are read and
         * returned as is, without being processed. All special processing of
         * characters by the terminal is disabled, including echoing input
         * characters. Reading from a TTY device in raw mode is faster than reading
         * from a TTY device in canonical mode.
         *
         * ```ts
         * using file = await Deno.open("/dev/tty6");
         * file.setRaw(true, { cbreak: true });
         * ```
         */
        setRaw(mode: boolean, options?: SetRawOptions): void;
        /**
         * Acquire an advisory file-system lock for the file.
         *
         * @param [exclusive=false]
         */
        lock(exclusive?: boolean): Promise<void>;
        /**
         * Synchronously acquire an advisory file-system lock synchronously for the file.
         *
         * @param [exclusive=false]
         */
        lockSync(exclusive?: boolean): void;
        /**
         * Release an advisory file-system lock for the file.
         */
        unlock(): Promise<void>;
        /**
         * Synchronously release an advisory file-system lock for the file.
         */
        unlockSync(): void;
        /** Close the file. Closing a file when you are finished with it is
         * important to avoid leaking resources.
         *
         * ```ts
         * using file = await Deno.open("my_file.txt");
         * // do work with "file" object
         * ```
         */
        close(): void;
        [Symbol.dispose](): void;
    }
}
export declare namespace fs {
    const writeFile: typeof Deno.writeFile;
    const writeTextFile: typeof Deno.writeTextFile;
    const readTextFile: typeof Deno.readTextFile;
    const readFile: typeof Deno.readFile;
    const chmod: typeof Deno.chmod;
    const chown: typeof Deno.chown;
    const cwd: typeof Deno.cwd;
    const makeTempDir: typeof Deno.makeTempDir;
    const makeTempFile: typeof Deno.makeTempFile;
    const mkdir: typeof Deno.mkdir;
    const chdir: typeof Deno.chdir;
    const copyFile: typeof Deno.copyFile;
    const readDir: typeof Deno.readDir;
    const readLink: typeof Deno.readLink;
    const realPath: typeof Deno.realPath;
    const remove: typeof Deno.remove;
    const rename: typeof Deno.rename;
    const stat: typeof Deno.stat;
    const lstat: typeof Deno.lstat;
    const truncate: typeof Deno.truncate;
    const FsFile: typeof Deno.FsFile;
    const open: typeof Deno.open;
    const create: typeof Deno.create;
    const symlink: typeof Deno.symlink;
    const link: typeof Deno.link;
    const utime: typeof Deno.utime;
    const umask: typeof Deno.umask;
}
export type HeaderMapType = {
    [key: string]: string;
};
export type PathParamsType = {
    [key: string]: string;
};
export type UserType = {
    id: string;
    email: string;
    csrf: string;
};
export type RequestType = {
    uri: string;
    params: PathParamsType;
    headers: HeaderMapType;
    user?: UserType;
    body?: Uint8Array;
};
export type ResponseType = {
    headers?: [string, string][];
    status?: number;
    body?: Uint8Array;
};
export type MaybeResponse<T> = Promise<T | undefined> | T | undefined;
export type CallbackType = (req: RequestType) => MaybeResponse<ResponseType>;
export type Method = "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE";
export declare enum StatusCodes {
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,
    EARLY_HINTS = 103,
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY = 301,
    MOVED_TEMPORARILY = 302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    USE_PROXY = 305,
    TEMPORARY_REDIRECT = 307,
    PERMANENT_REDIRECT = 308,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
    PRECONDITION_FAILED = 412,
    REQUEST_TOO_LONG = 413,
    REQUEST_URI_TOO_LONG = 414,
    UNSUPPORTED_MEDIA_TYPE = 415,
    REQUESTED_RANGE_NOT_SATISFIABLE = 416,
    EXPECTATION_FAILED = 417,
    IM_A_TEAPOT = 418,
    INSUFFICIENT_SPACE_ON_RESOURCE = 419,
    METHOD_FAILURE = 420,
    MISDIRECTED_REQUEST = 421,
    UNPROCESSABLE_ENTITY = 422,
    LOCKED = 423,
    FAILED_DEPENDENCY = 424,
    UPGRADE_REQUIRED = 426,
    PRECONDITION_REQUIRED = 428,
    TOO_MANY_REQUESTS = 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
    UNAVAILABLE_FOR_LEGAL_REASONS = 451,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    HTTP_VERSION_NOT_SUPPORTED = 505,
    INSUFFICIENT_STORAGE = 507,
    NETWORK_AUTHENTICATION_REQUIRED = 511
}
export declare class HttpError extends Error {
    readonly statusCode: number;
    readonly headers: [string, string][] | undefined;
    constructor(statusCode: number, message?: string, headers?: [string, string][]);
    toString(): string;
    toResponse(): ResponseType;
}
export type StringRequestType = {
    uri: string;
    params: PathParamsType;
    headers: HeaderMapType;
    user?: UserType;
    body?: string;
};
export type StringResponseType = {
    headers?: [string, string][];
    status?: number;
    body: string;
};
export declare function stringHandler(f: (req: StringRequestType) => MaybeResponse<StringResponseType | string>): CallbackType;
export type HtmlResponseType = {
    headers?: [string, string][];
    status?: number;
    body: string;
};
export declare function htmlHandler(f: (req: StringRequestType) => MaybeResponse<HtmlResponseType | string>): CallbackType;
export type JsonRequestType = {
    uri: string;
    params: PathParamsType;
    headers: HeaderMapType;
    user?: UserType;
    body?: object | string;
};
export interface JsonResponseType {
    headers?: [string, string][];
    status?: number;
    body: object;
}
export declare function jsonHandler(f: (req: JsonRequestType) => MaybeResponse<JsonRequestType | object>): CallbackType;
export declare function addRoute(method: Method, route: string, callback: CallbackType): void;
export declare function dispatch(method: Method, route: string, uri: string, pathParams: [string, string][], headers: [string, string][], user: UserType | undefined, body: Uint8Array): Promise<ResponseType>;
export declare function addPeriodicCallback(milliseconds: number, cb: (cancel: () => void) => void): () => void;
export declare function query(queryStr: string, params: unknown[]): Promise<unknown[][]>;
export declare function execute(queryStr: string, params: unknown[]): Promise<number>;
export type ParsedPath = {
    path: string;
    query: URLSearchParams;
};
export declare function parsePath(path: string): ParsedPath;
export declare function decodeFallback(bytes: Uint8Array): string;
export declare function encodeFallback(string: string): Uint8Array;
export {};
